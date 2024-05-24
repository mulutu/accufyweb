import { copyrightSign } from "../../../public/icons";
import { footerLogo } from "../../../public/images";
import { footerLinks, socialMedia } from "../../constants";
import MaxWidthWrapper from '../MaxWidthWrapper';
import facebook from "../../../public/icons/facebook.svg";
import twitter from "../../../public/icons/twitter.svg";
import instagram from "../../../public/icons/instagram.svg";

type Props = {}

const Footer = (props: Props) => {
  return (
    <section className=' bg-black padding-x padding-t pb-8'>
      <MaxWidthWrapper>
        <footer className='flex flex-col w-full max-container pt-10'>
          <div className='flex justify-between items-start gap-20 flex-wrap max-lg:flex-col '>
            <div className='flex flex-col items-start'>
              <a href='/'>
                <img
                  src="/images/footer-logo.svg"
                  alt='logo'
                  width={150}
                  height={46}
                  className='m-0'
                />
              </a>
              <p className='mt-6 text-base leading-7 font-montserrat text-white sm:max-w-sm'>
                Solutions tailored specifically for busy SMEs, to streamline operations, boost productivity, and give you more time to focus on what matters most.
              </p>
              <div className='flex items-center gap-5 mt-5'>
                {socialMedia.map((icon) => (
                  <div
                    className='flex justify-center items-center w-12 h-12 bg-white rounded-full'
                    key={icon.alt}
                  >
                    <a href={icon.link}>
                      <img src={icon.src} alt={icon.alt} width={24} height={24} />
                    </a>
                  </div>
                ))}
              </div>
            </div>

            <div className='flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap'>
              {footerLinks.map((section) => (
                <div key={section.title}>
                  <h4 className='font-montserrat text-2xl leading-normal font-medium mb-6 text-white'>
                    {section.title}
                  </h4>
                  <ul>
                    {section.links.map((link) => (
                      <li
                        className='mt-3 font-montserrat text-base leading-normal text-white hover:text-slate-gray'
                        key={link.name}
                      >
                        <a href={link.link}>{link.name}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

          </div>

          <div className='flex text-white mt-10 max-sm:flex-col max-sm:items-center border-t border-t-white pt-5 pb-5'>
            <div className='flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer'>
              <img
                src="/icons/copyright-sign.svg"
                alt='copyright sign'
                width={20}
                height={20}
                className='rounded-full m-0'
              />
              <p>Copyright. All rights reserved.</p>
            </div>
            <a href="/" className='font-montserrat cursor-pointer'>Terms & Conditions</a>
          </div>

        </footer>
      </MaxWidthWrapper>
    </section>
  );
};

export default Footer;
