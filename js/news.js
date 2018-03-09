
    $(function () {
 
        $(".news-ticker-images").bootstrapNews({
 
            newsPerPage: 4,
 
            autoplay: true,
 
            pauseOnHover:true,
 
            direction: 'up',
 
            newsTickerInterval: 2000,
 
            onToDo: function () {
 
            }
 
        });
    });