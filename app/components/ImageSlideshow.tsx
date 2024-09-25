export default function ImageSlideshow(props: React.PropsWithChildren) {
    let slideindex = 1
    showSlides(slideindex)
    
    function currentSlide(n: number) {
        showSlides(slideindex = n)
    }

    function showSlides(n: number) {
        
    }
    return (
        <div className="image_slideshow">
            {
                props.children
            }
            <a className="prev" onClick={() => {

            }}>&#10094;</a>
            <a className="next" onClick={() => {

            }}>&#10095;</a>
        </div>
    );
}
