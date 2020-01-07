LFILE = README
MDFILE = outline

all: knith
#all: knith open 

knith: $(LFILE).Rmd
	echo "rmarkdown::render('$(LFILE).Rmd',output_file='$(LFILE).html')" | R --no-save -q

knitmd: $(MDFILE).md
	echo "rmarkdown::render('$(MDFILE).md',output_file='$(MDFILE).html')" | R --no-save -q

knitr: $(LFILE).Rmd
	echo "rmarkdown::render('$(LFILE).Rmd',rmarkdown::md_document(variant='gfm'))" | R --no-save -q

open: $(LFILE).html
	xdg-open $(LFILE).html &

openmd: $(MDFILE).html
	xdg-open $(MDFILE).html &

clean:
	rm -rf *.html *.png 
