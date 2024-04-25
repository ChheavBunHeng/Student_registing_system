import react from "react";

function Footer()
{
    return(
    <div className="flex flex-row justify-evenly align-middle bg-blue-300 w-screen h-[30vh]">
        <div className="media-contain w-[300px] flex justify-center">
            <h4 className="title text-[30px] font-extrabold">Media</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
            <ul className="flex flex-row gap-[10px] justify-center">
                <li><a href="">Facebook</a></li>
                <li><a href="">Twitter</a></li>
                <li><a href="">Instagram</a></li>
                <li><a href="">LinkedIn</a></li>
            </ul>
        </div>
        <div className="category-contain w-[300px]">
            <h4 className="title text-[30px] font-extrabold">Top 4 category</h4>
            <ul>
                <li><a href="">Finance & Accounting</a></li>
                <li><a href="">Development</a></li>
                <li><a href="">Design</a></li>
                <li><a href="">Business</a></li>
            </ul>
        </div>

        <div className="links-contain w-[300px]">
            <h4 className="title text-[30px] font-extrabold">Quick Links</h4>
            <ul>
                <li><a href="">About</a></li>
                <li><a href="">Become instructor</a></li>
                <li><a href="">Contact</a></li>
                <li><a href="">Career</a></li>
            </ul>
        </div>

        <div className="support-contain w-[300px] ">
            <h4 className="title text-[30px] font-extrabold">Support</h4>
            <ul>
                <li><a href="">Help Center</a></li>
                <li><a href="">FAQs</a></li>
                <li><a href="">Terms & Condition</a></li>
                <li><a href="">Privacy Policy</a></li>
            </ul>
        </div>
    </div>
    )
}
export default Footer;