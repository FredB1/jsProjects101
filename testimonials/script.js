let quote = Array(
    {
        'name': 'John',
        'image': 'images/john.jpeg',
        'testimonial': 'I cannot begin to thank the crew at WTT for the amazing work they did on my business site! I could have never imagined it would have looked so incredible and functioned so well! I’d recommend them to ANYONE looking to build a website for their business! Thank you WTT!'
    },
    {
        'name': 'Mary',
        'image': 'images/mary.jpeg',
        'testimonial': 'Please make sure that you thank everyone at WTT for all of the work they have done, we are very happy with everything and will be recommending your services to anyone that will listen. Pass it on please.'
    },
    {
        'name': 'Sarah',
        'image': 'images/sarah.jpeg',
        'testimonial': 'The team was very helpful when building my website, I now have my ecommerce store built from scratch!'
    },
    {
        'name': 'Mike',
        'image': 'images/mike.jpeg',
        'testimonial': 'Fantastic service and great guy. We recommend to anyone who needs a website or web services. Well be using for any further web based services we require!'
    }
);
const image = document.getElementById('image');
const name = document.getElementById('name');
const testimonial = document.getElementById('testimonial');

let counter = 0;
const update = function () {
  image.src = quote[counter].image;
  name.innerHTML = quote[counter].name;
  testimonial.innerHTML = quote[counter].testimonial;
}
update();
let left = document.getElementById('left');
let right = document.getElementById('right');
left.addEventListener("click", moveLeft);
right.addEventListener('click', moveRight);


function moveLeft() {
    update()
    if (counter <= 0) {
        counter = 3;
    } else {
        counter--;
    }
}
function moveRight() {
    update()
if (counter >= 3) {
    counter = 0;
} else {
    counter++;
}
}