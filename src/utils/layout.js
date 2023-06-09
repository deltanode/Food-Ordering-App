import { BiSearch } from "react-icons/bi"
import { CiPercent } from "react-icons/ci"
import { BiHelpCircle } from "react-icons/bi"
import { AiOutlineUser } from "react-icons/ai"
import { BsMinecart } from "react-icons/bs"
import { HiMenu } from "react-icons/hi"
import { RiCloseLine } from "react-icons/ri"

export const menuIcons = {
  Menu: HiMenu,
  Close: RiCloseLine
}

export const navLinks = [
  {
    icon: BiSearch,
    name: "search"
  },
  {
    icon: CiPercent,
    name: "Offers"
  },
  {
    icon: BiHelpCircle,
    name: "Help"
  },
  {
    icon: AiOutlineUser,
    name: "Sign In"
  },
  {
    icon: BsMinecart,
    name: "Cart"
  }
]

export const footerLinks = [
  {
    title: "COMPANY",
    links: ["About us", "Team", "Careers", "Swiggy", "Blog", "Bug", "Bounty", "Swiggy One", "Swiggy Corporate", "Swiggy Instamart", "Swiggy", "Genie"]
  },
  {
    title: "CONTACT",
    links: ["Help & Support", "Partner with us", "Ride with us"]
  },
  {
    title: "LEGAL",
    links: ["Terms & Conditions", "Refund & Cancellation", "Privacy Policy", "Cookie Policy", "Offer Terms", "Phishing & Fraud", "Corporate – Swiggy Money Codes Terms and Conditions", "Corporate - Swiggy Discount Voucher Terms and Conditions]"]
  },
  {
    title: "DOWNLOADS",
    links: ["https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-AppStore_lg30tv", "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-GooglePlay_1_zixjxl"]
  }
]
