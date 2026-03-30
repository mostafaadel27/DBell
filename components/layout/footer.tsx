import Link from "next/link"
import { Logo } from "@/components/ui/logo"
import { MapPin, Phone, Mail, MessageSquare } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-black py-16 border-t border-neutral-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <Logo />
            </Link>
            <p className="text-neutral-400 max-w-sm">
              Premium fitness experience focused on real results, strong community, and state-of-the-art facilities.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold uppercase mb-4 tracking-wider">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="#programs" className="text-neutral-500 hover:text-red-500 transition-colors">Programs</Link></li>
              <li><Link href="#transformations" className="text-neutral-500 hover:text-red-500 transition-colors">Transformations</Link></li>
              <li><Link href="#pricing" className="text-neutral-500 hover:text-red-500 transition-colors">Pricing</Link></li>
              <li><Link href="#testimonials" className="text-neutral-500 hover:text-red-500 transition-colors">Testimonials</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold uppercase mb-4 tracking-wider">Support</h4>
            <ul className="space-y-3">
              <li><Link href="#" className="text-neutral-500 hover:text-red-500 transition-colors">FAQ</Link></li>
              <li><Link href="#" className="text-neutral-500 hover:text-red-500 transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="text-neutral-500 hover:text-red-500 transition-colors">Privacy Policy</Link></li>
              <li><Link href="#contact" className="text-neutral-500 hover:text-red-500 transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold uppercase mb-4 tracking-wider">Follow Us</h4>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-red-600 hover:border-red-600 transition-all">
                <MapPin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-red-600 hover:border-red-600 transition-all">
                <Phone className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-red-600 hover:border-red-600 transition-all">
                <Mail className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-red-600 hover:border-red-600 transition-all">
                <MessageSquare className="w-5 h-5" />
              </a>
            </div>
          </div>
          
        </div>
        
        <div className="pt-8 border-t border-neutral-900 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-neutral-600 text-sm">
            &copy; {new Date().getFullYear()} DBell Fitness. All rights reserved.
          </p>
          <div className="text-neutral-600 text-sm">
            Designed to build greatness.
          </div>
        </div>
      </div>
    </footer>
  )
}
