
# Modified version of `gh_recipes::get_issue_thread` that extracts only the
# opening entry of each `joss-review` issue:

get_issue_first_cmt <- function (gh_cli, org = "openjournals",
                                 repo = "joss-reviews",
                                 issue_num) {
  query <- paste0('{
                  repository(owner: \"', org, '\", name: \"', repo, '\") {
                      issue(number: ', issue_num, ') {
                          title
                          createdAt
                          closedAt
                          author {
                              login
                          }
                          body
                          comments(first: 1) {
                              edges {
                                  node {
                                      body
                                      url
                                      createdAt
                                      author {
                                          login
                                      }
                                  }
                                  cursor
                              }
                          }
                      }
                  }
            }')
    qry <- ghql::Query$new()
    qry$query('get_issue', query)

    res <- gh_cli$exec(qry$queries$get_issue) %>%
        jsonlite::fromJSON ()

    return (res$data$repository$issue$body)
}

get_repo_files <- function (gh_cli, org, repo) {
    # single depth query
    query <- paste0('{
                    repository(owner: \"', org, '\", name:\"', repo, '\") {
                               name
                               object(expression: "master:") {
                                   ... on Tree {
                                       entries {
                                           name
                                           type
                                           oid
                                       }
                                   }
                               }
                    }
                }')
    qry <- ghql::Query$new()
    qry$query('files', query)

    res <- gh_cli$exec(qry$queries$files) %>%
        jsonlite::fromJSON ()
    res <- res$data$repository$object$entries

    if (is.null (res)) # non-existent repos
        return (NULL)

    blobs <- res [res$type == "blob", ]
    trees <- res [res$type == "tree", ]
    # recurse all trees:
    while (nrow (trees) > 0) {
        oid <- trees$oid [1]
        query <- paste0('{
                        repository(owner: \"', org, '\", name:\"', repo, '\") {
                                   name
                                   object(expression: \"master:\", oid:\"', oid, '\") {
                                       ... on Tree {
                                           entries {
                                               name
                                               type
                                               oid
                                           }
                                       }
                                   }
                        }
                    }')
        qry <- ghql::Query$new()
        qry$query('files', query)

        res <- gh_cli$exec(qry$queries$files) %>%
            jsonlite::fromJSON ()
        res <- res$data$repository$object$entries
        
        res$name <- paste0 (trees$name [1], "/", res$name)
        blobs <- rbind (blobs, res [res$type == "blob", ])
        trees <- rbind (trees [-1, ], res [res$type == "tree", ])
    }

    return (blobs [, c ("name", "oid")])
}
