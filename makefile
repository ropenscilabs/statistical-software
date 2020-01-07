LFILE = README
OFILE = outline

all: knito
#all: knith open 

knith: $(LFILE).Rmd
	echo "rmarkdown::render('$(LFILE).Rmd',output_file='$(LFILE).html')" | R --no-save -q

knito: $(OFILE).Rmd
	echo "rmarkdown::render('$(OFILE).Rmd',output_file='$(OFILE).html')" | R --no-save -q

knitr: $(LFILE).Rmd
	echo "rmarkdown::render('$(LFILE).Rmd',rmarkdown::md_document(variant='gfm'))" | R --no-save -q

knitor: $(OFILE).Rmd
	echo "rmarkdown::render('$(OFILE).Rmd',rmarkdown::md_document(variant='gfm'))" | R --no-save -q

open: $(LFILE).html
	xdg-open $(LFILE).html &

openo: $(OFILE).html
	xdg-open $(OFILE).html &

clean:
	rm -rf *.html *.png 
