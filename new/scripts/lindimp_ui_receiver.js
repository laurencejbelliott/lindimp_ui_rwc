$(document).ready(function(){
    currentPageTopic.subscribe(function(msg){
        var currentPage = msg.data;
        if (currentPage === "/lindimp_ui_rwc/new/tours-page.html"){
            console.log("Tours page loaded!");
            Show_available_tours();
        }
    });
});