RFILE = README
BFILE = background

all: knith
#all: knith open 

knith: $(RFILE).Rmd
	echo "rmarkdown::render('$(RFILE).Rmd',output_file='$(RFILE).html')" | R --no-save -q

knitb: $(BFILE).Rmd
	echo "rmarkdown::render('$(BFILE).Rmd',output_file='$(BFILE).html')" | R --no-save -q

knitr: $(RFILE).Rmd
	echo "rmarkdown::render('$(RFILE).Rmd',rmarkdown::md_document(variant='gfm'))" | R --no-save -q

knitbr: $(BFILE).Rmd
	echo "rmarkdown::render('$(BFILE).Rmd',rmarkdown::md_document(variant='gfm'))" | R --no-save -q

open: $(RFILE).html
	xdg-open $(RFILE).html &

openb: $(BFILE).html
	xdg-open $(BFILE).html &

clean:
	rm -rf *.html *.png 
