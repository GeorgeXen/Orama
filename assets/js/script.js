$( document ).ready(function() {
    var w = window.innerWidth;

    if(w > 767){
        $('#menu-jk').scrollToFixed();
    }else{
        $('#menu-jk').scrollToFixed();
    }



})


$( document ).ready(function() {

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        autoplay: true,
        dots: true,
        autoplayTimeout: 5000,
        navText:['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })


});

$(document).ready(function() {
    $(".filter-button").click(function() {
        var value = $(this).attr('data-filter');

        if (value == "all") {
            $('.gallery_product').fadeOut(300, function() {
                $(this).fadeIn(500);
            });
        } else {
            // Fade out all items first
            $('.gallery_product').fadeOut(300).promise().done(function() {
                // Then fade in only the items that match the category
                $('.gallery_product').filter('[data-category="' + value + '"]').fadeIn(500);
            });
        }
        
        // Handle active class for buttons
        $('.filter-button').removeClass('active');
        $(this).addClass('active');
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
    var close = document.getElementsByClassName("close")[0];

    document.querySelectorAll('.gallery_product img').forEach(item => {
        item.addEventListener('click', event => {
            modal.style.display = "block";
            modalImg.src = item.src;
            captionText.innerHTML = item.alt;
        });
    });

    close.onclick = function() {
        modal.style.display = "none";
    }

    modal.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }
});

$(document).ready(function() {
    var currentImageIndex = -1;
    var galleryImages = $('.gallery_product img').map(function() {
        return $(this).attr('src');
    }).get();

    $('.gallery_product img').click(function() {
        currentImageIndex = galleryImages.indexOf($(this).attr('src'));
        $('#img01').attr('src', $(this).attr('src'));
        $('#myModal').css('display', 'block');
    });

    $('.close, #myModal').click(function(event) {
        if (event.target === this) {
            $('#myModal').css('display', 'none');
        }
    });

    $('#img01').click(function(event) {
        var imgWidth = $(this).width();
        var clickX = event.pageX - $(this).offset().left;

        if (clickX < imgWidth / 2 && currentImageIndex > 0) {
            // Left side click
            currentImageIndex -= 1;
        } else if (clickX >= imgWidth / 2 && currentImageIndex < galleryImages.length - 1) {
            // Right side click
            currentImageIndex += 1;
        }
        $(this).attr('src', galleryImages[currentImageIndex]);
    });

    // Include other initialization scripts here
});

function openModal(src) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
    modal.style.display = "block";
    modalImg.src = src;
    captionText.innerHTML = src.split('/').pop(); // Optional: Show filename as caption

    var span = document.getElementsByClassName("close")[0];
    span.onclick = function() { 
        modal.style.display = "none";
    }
}
