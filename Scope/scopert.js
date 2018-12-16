
// GLOBAL SCOPES ˅˅
var ul; //Const
var liItems; //Let
var imageWidth; //Let
var imageNumber; //Let
// GLOBAL SCOPES ^^

function init(){

    ul = document.getElementById('image_slider');
    liItems = ul.children;
    imageNumber = liItems.length;
    imageWidth = liItems[0].children[0].offsetWidth;
    // set ul’s width as the total width of all images in image slider.
    ul.style.width = parseInt(imageWidth * imageNumber) + 'px';
    slider(ul);
}

// GLOBAL SCOPE ˅˅
var computedStyle = document.defaultView.getComputedStyle(liItems[i].childNodes[0], null); // Let
// GLOBAL SCOPE ^^

imageWidth = computedStyle.width;

/**delta function is to set how the image slide—keep still for a while and move to next picture.
 *step function will be called many times until clearInterval() been called
 * currentImage * imageWidth is the currentImage position of ul
 * delta start from 0 to 1, delta * imageWidth is the pixels that changes
 **/
function slider(ul){
    animate({
        delay:17,
        duration: 3000,
        delta:function(p){return Math.max(0, -1 + 2 * p)},
        step:function(delta){
        },
        callback:function(){
            currentImage++;
            // if it doesn’t slied to the last image, keep sliding
            if(currentImage < imageNumber-1){
                slider(ul);
            }
            // if current image it’s the last one, it slides back to the first one
            else{

                // LOCAL SCOPE ˅˅
                var leftPosition = (imageNumber - 1) * imageWidth; // Let
                // LOCAL SCOPE ^^

                // after 2 seconds, call the goBack function to slide to the first image
                setTimeout(function(){goBack(leftPosition)},2000);
                setTimeout(function(){slider(ul)}, 4000);
            }
        }
    });
}

function goBack(leftPosition){

    // NIET GEDEFINED - WORDT AUTOMATISCH EEN GLOBAL SCOPES ˅˅
    currentImage = 0;
    // NIET GEDEFINED - WORDT AUTOMATISCH EEN GLOBAL SCOPES ^^

    // Const ˅˅
    var id = setInterval(function(){
        if(leftPosition >= 0){
            ul.style.left = '-' + parseInt(leftPosition) + 'px';
            leftPosition -= imageWidth / 10;
        }
        else{
            clearInterval(id);
        }
    }, 17);
}

//generic animate function
function animate(opts){
    // LOCAL SCOPES ˅˅
    var start = new Date; //Let

    // Const ˅˅
    var id = setInterval(function(){
        // LOCAL SCOPES ^^

        // LOCAL SCOPES ˅˅
        var timePassed = new Date - start; // Let
        var progress = timePassed / opts.duration; // Let
        // LOCAL SCOPES ^^

        if(progress > 1){
            progress = 1;
        }

        // LOCAL SCOPE ˅˅
        var delta = opts.delta(progress); // Let
        // LOCAL SCOPE ^^

        opts.step(delta);
        if (progress == 1){
            clearInterval(id);
            opts.callback();
        }
    }, opts.dalay || 17);
}
window.onload = init;