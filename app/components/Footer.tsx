import { Link } from "react-router";

const Footer = () => {
    return (
        <div className="w-full h-fit md:h-[200px] bg-[#6E4E37] flex justify-center items-center py-8 md:py-12">
        
            <div className="w-[95%] md:w-[90%] lg:w-[85%] max-w-[1200px] bg-transparent flex flex-col md:flex-row justify-center items-center md:items-start gap-8 md:gap-12 lg:gap-16">
                
                {/* Logo and Social Section */}
                <div className="w-full md:w-auto flex flex-col justify-center items-center md:items-start gap-4">
                    <Link to="/" className="flex flex-row items-center gap-2">
                        <img 
                            src="/logos/footer logo.png"
                            alt="Footer Logo" 
                            className="w-[40px] h-[40px]"
                        />
                    </Link>

                    <p className="text-[10px] md:text-xs text-center md:text-left text-[#FFE4CC]/80 max-w-[200px]">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </p>

                    <div className="flex flex-row gap-4">
                        <a 
                            href="https://www.facebook.com/sjhandicrafts04" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:opacity-80 transition-opacity"
                        >
                            <img 
                                src="/icons/facebook icon.png"
                                alt="Facebook Icon"
                                className="w-[24px] h-[24px] md:w-[20px] md:h-[20px]"
                            />
                        </a>
                        <a 
                            href="https://www.instagram.com/sjhandicrafts04" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:opacity-80 transition-opacity"
                        >
                            <img 
                                src="/icons/instagram icon.png"
                                alt="Instagram Icon"
                                className="w-[24px] h-[24px] md:w-[20px] md:h-[20px]"
                            />
                        </a>
                    </div>
                </div>

                {/* Partners Section */}
                <div className="w-full md:w-auto flex flex-col gap-3 items-center md:items-start">
                    <h1 className="text-lg md:text-xl text-[#FFE4CC] font-poppinsBold w-full text-center md:text-left">Partners</h1>
                    <div className="flex flex-row gap-8">
                        {/* Column 1 */}
                        <div className="flex flex-col gap-3">
                            <a 
                                href="https://www.kulturafilipino.com/" 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xs md:text-sm text-[#FFE4CC]/80 hover:text-[#FFE4CC] hover:underline transition-colors"
                            >
                                Kultura
                            </a>
                            <a 
                                href="https://www.snrshopping.com/" 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xs md:text-sm text-[#FFE4CC]/80 hover:text-[#FFE4CC] hover:underline transition-colors"
                            >
                                S&R
                            </a>
                            <a 
                                href="https://www.hilton.com/" 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xs md:text-sm text-[#FFE4CC]/80 hover:text-[#FFE4CC] hover:underline transition-colors"
                            >
                                Hilton Hotel & Resorts
                            </a>
                        </div>
                        {/* Column 2 */}
                        <div className="flex flex-col gap-3">
                            <a 
                                href="https://www.lcc.com.ph/" 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xs md:text-sm text-[#FFE4CC]/80 hover:text-[#FFE4CC] hover:underline transition-colors"
                            >
                                LCC Supermarket
                            </a>
                            <a 
                                href="https://www.puregold.com.ph/" 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xs md:text-sm text-[#FFE4CC]/80 hover:text-[#FFE4CC] hover:underline transition-colors"
                            >
                                Puregold
                            </a>
                        </div>
                    </div>
                </div>

                {/* Contacts Section */}
                <div className="w-full md:w-auto flex flex-col gap-3 items-center md:items-start">
                    <h1 className="text-lg md:text-xl text-[#FFE4CC] font-poppinsBold">Contacts</h1>
                    <a 
                        href="tel:+639178415199"
                        className="text-xs md:text-sm text-[#FFE4CC]/80 hover:text-[#FFE4CC] transition-colors"
                    >
                        PH: +63 917 841 5199
                    </a>
                    <a 
                        href="mailto:sjhandicrafts04@gmail.com"
                        className="text-xs md:text-sm text-[#FFE4CC]/80 hover:text-[#FFE4CC] transition-colors break-all"
                    >
                        Email: sjhandicrafts04@gmail.com
                    </a>
                </div>

                {/* Links Section */}
                <div className="w-full md:w-auto flex flex-col gap-3 items-center md:items-start">
                    <h1 className="text-lg md:text-xl text-[#FFE4CC] font-poppinsBold">Links</h1>
                    <Link 
                        to="/about-us" 
                        className="text-xs md:text-sm text-[#FFE4CC]/80 hover:text-[#FFE4CC] hover:underline transition-colors"
                    >
                        About Us
                    </Link>
                    <Link 
                        to="/our-products" 
                        className="text-xs md:text-sm text-[#FFE4CC]/80 hover:text-[#FFE4CC] hover:underline transition-colors"
                    >
                        Our Products
                    </Link>
                    <Link 
                        to="/contact-us" 
                        className="text-xs md:text-sm text-[#FFE4CC]/80 hover:text-[#FFE4CC] hover:underline transition-colors"
                    >
                        Contact Us
                    </Link>
                </div>

            </div>

        </div>
    );
  };
  
  export default Footer;
