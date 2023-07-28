window.onload = function() {
    var form = document.querySelector("form");
    form.onsubmit = function(e) {
        e.preventDefault();
        var header = document.querySelector('input[name="header"]').value;
        var content = document.querySelector('textarea[name="content"]').value;
        var image = document.querySelector('input[name="image"]').files[0];
      
        //grab into and put the text in a doument and use the post id to reference it in the storage to acess the image


       
    }
}