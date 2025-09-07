import { Github, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t py-6 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © Vishal Lakshmi Narayanan. All rights reserved.
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <a
            href="https://github.com/VishalLakshmiNarayanan"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon github w-10 h-10 flex items-center justify-center"
          >
            <Github className="icon w-4 h-4" />
          </a>
          <a
            href="https://linkedin.com/in/vishal-lakshmi-narayanan-687619324"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon linkedin w-10 h-10 flex items-center justify-center"
          >
            <Linkedin className="icon w-4 h-4" />
          </a>
          <a
            href="https://medium.com/@lvishal1607"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon medium w-10 h-10 flex items-center justify-center"
          >
            <span className="icon text-sm font-bold">M</span>
          </a>
          <a
            href="https://leetcode.com/u/lvleetcode/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon leetcode w-10 h-10 flex items-center justify-center"
          >
            <span className="icon text-xs font-bold">LC</span>
          </a>
        </div>
      </div>
    </footer>
  )
}
