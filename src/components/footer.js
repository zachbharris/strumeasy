import React from 'react'
import Link from 'gatsby-link'

const date = new Date().getFullYear();

const Footer = ({ siteTitle }) => (
  <footer className="typography-bg">
    <div className="container">
      <Link to="/" className="logo">
        <svg viewBox="0 0 36 37" xmlns="http://www.w3.org/2000/svg"><g fill="#FFF" fillRule="evenodd"><path d="M13.056 31.437c1.564 1.666 3.111 2.694 4.45 2.694 1.058 0 2.237-.599 3.449-1.624h3.107c-2.201 2.596-4.448 4.266-6.359 4.266-1.915 0-4.197-1.804-6.434-4.573.621-.203 1.217-.457 1.787-.763zM8.215 4.176c5.207-2.056 13.883-2.066 18.939.105h5.31C27.166-1.863 5.55-1.29 2.234 5.333c-.35.699-.55 1.564-.619 2.557a7.127 7.127 0 0 1 1.696-1.703C4.743 5.16 6.38 4.49 8.215 4.176zm20.27 17.18h2.26a53.87 53.87 0 0 1-2.25 4.58h-2.37c.856-1.448 1.656-3 2.36-4.58zm2.875-10.503h2.432c-.134 1.253-.395 2.6-.761 4a2.002 2.002 0 0 0-.53-.068h-1.726c.336-1.402.542-2.733.585-3.932zM6.875 21.677a48.159 48.159 0 0 0 2.111 4.092c-.488.248-1.047.397-1.683.443a56.953 56.953 0 0 1-2.72-5.594c.145.077.292.152.442.226.367.183.913.43 1.638.74l.212.093z" fillRule="nonzero" /><path d="M7.319 32.006c-1.093 0-2.281-.133-3.564-.4-1.284-.266-2.268-.653-2.955-1.16-.533-.406-.8-.876-.8-1.408 0-1.7.095-2.83.286-3.387.19-.559.426-.838.705-.838.127 0 .432.152.915.457a12.74 12.74 0 0 0 2.249 1.275c.737.317 1.639.476 2.706.476 1.042 0 1.944-.222 2.707-.666.762-.444 1.143-1.2 1.143-2.265 0-.736-.299-1.32-.896-1.75-.597-.432-1.543-.927-2.84-1.485a32.509 32.509 0 0 1-1.6-.723c-1.398-.685-2.497-1.522-3.298-2.512-.8-.989-1.2-2.36-1.2-4.11 0-3.07.965-5.296 2.897-6.679 1.931-1.382 4.269-2.074 7.013-2.074 1.347 0 2.541.146 3.583.438 1.042.292 1.83.653 2.364 1.084.432.356.648.71.648 1.066 0 .33-.14.768-.42 1.313a6.263 6.263 0 0 1-1.01 1.446c-.394.419-.73.628-1.01.628-.102 0-.26-.044-.476-.133a8.454 8.454 0 0 1-.553-.247 8.644 8.644 0 0 0-3.126-.571c-1.448 0-2.44.247-2.973.742-.534.495-.8 1.046-.8 1.655 0 .838.298 1.49.895 1.96.598.47 1.544.983 2.84 1.542l1.106.494c1.524.685 2.738 1.51 3.64 2.474.902.964 1.353 2.296 1.353 3.996 0 3.4-.94 5.81-2.82 7.23-1.881 1.422-4.117 2.132-6.71 2.132z" /><path d="M17.903 31.714c-.509 0-.864-.089-1.068-.266-.203-.178-.305-.495-.305-.952l2.478-23.9c.05-.532.21-.92.476-1.16.267-.241.668-.362 1.201-.362h13.951c.356 0 .61.12.763.362.152.24.228.628.228 1.16v.343c-.05 2.08-.533 3.12-1.448 3.12h-9.606l-.61 5.52h8.539c.355 0 .61.12.762.36.152.242.229.629.229 1.161v.305c-.051 2.106-.534 3.159-1.449 3.159h-8.576l-.686 6.165h9.605c.356 0 .61.12.763.361.152.241.228.628.228 1.161v.343c-.05 2.08-.533 3.12-1.448 3.12H17.903z" /></g></svg>
      </Link>

      <div className="copyright">
        <p>Copyright &copy; {date}. All Rights Reserved.</p>
      </div>

      <section name="social" className="social">
        <a id="twitter" href="https://twitter.com/strumeasy" target="_blank" rel="noopener noreferrer">
          <svg viewBox='0 0 20 16' xmlns='http://www.w3.org/2000/svg'><path d='M19.163 2.055a8 8 0 0 1-2.26.62 3.966 3.966 0 0 0 1.73-2.178 8.13 8.13 0 0 1-2.501.947A3.936 3.936 0 0 0 9.425 5.03 11.148 11.148 0 0 1 1.312.929a3.858 3.858 0 0 0-.533 1.98c0 1.368.696 2.57 1.75 3.277a3.923 3.923 0 0 1-1.782-.493v.049c0 1.908 1.355 3.499 3.157 3.861a3.997 3.997 0 0 1-1.77.068 3.95 3.95 0 0 0 3.684 2.734 7.894 7.894 0 0 1-4.882 1.684c-.312 0-.623-.019-.936-.054a11.196 11.196 0 0 0 6.046 1.767c7.243 0 11.199-5.996 11.199-11.188 0-.168 0-.336-.012-.504A7.949 7.949 0 0 0 19.2 2.07l-.038-.016z' fill='#FFF' /></svg>
        </a>
        <a id="instagram" href="https://instagram.com/strumeasy" target="_blank" rel="noopener noreferrer">
          <svg viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg'><path d='M8 0C5.827 0 5.555.01 4.702.048 3.85.088 3.27.222 2.76.42a3.918 3.918 0 0 0-1.417.923c-.445.444-.72.89-.923 1.417-.198.51-.333 1.09-.372 1.942C.008 5.555 0 5.827 0 8s.01 2.445.048 3.298c.04.851.174 1.432.372 1.942.204.525.478.973.923 1.417.444.444.89.72 1.417.923.51.197 1.09.333 1.942.372.853.04 1.125.048 3.298.048s2.445-.01 3.298-.048c.851-.04 1.432-.175 1.942-.372a3.932 3.932 0 0 0 1.417-.923c.444-.444.72-.89.923-1.417.197-.51.333-1.09.372-1.942.04-.853.048-1.125.048-3.298s-.01-2.445-.048-3.298c-.04-.851-.175-1.433-.372-1.942a3.926 3.926 0 0 0-.923-1.417A3.898 3.898 0 0 0 13.24.42c-.51-.198-1.09-.333-1.942-.372C10.445.008 10.173 0 8 0zm0 1.44c2.135 0 2.39.01 3.233.047.78.037 1.204.166 1.485.277.375.145.64.318.921.597.28.28.453.546.598.921.109.281.24.705.275 1.485.038.844.047 1.097.047 3.233s-.01 2.39-.05 3.233c-.04.78-.17 1.204-.28 1.485-.15.375-.32.64-.6.921-.279.28-.549.453-.92.598-.28.109-.71.24-1.49.275-.849.038-1.099.047-3.239.047-2.14 0-2.39-.01-3.24-.05-.78-.04-1.21-.17-1.49-.28-.38-.15-.64-.32-.92-.6a2.43 2.43 0 0 1-.6-.92c-.11-.28-.239-.71-.28-1.49-.03-.84-.04-1.099-.04-3.229s.01-2.39.04-3.24c.041-.78.17-1.21.28-1.49.14-.38.32-.64.6-.92.28-.28.54-.46.92-.6.28-.11.7-.24 1.48-.28.85-.03 1.1-.04 3.24-.04l.03.02zm0 2.452a4.108 4.108 0 1 0 0 8.215 4.108 4.108 0 0 0 0-8.215zm0 6.775a2.666 2.666 0 1 1 0-5.334 2.666 2.666 0 1 1 0 5.334zm5.23-6.937a.96.96 0 1 1-1.92-.001.96.96 0 0 1 1.92.001z' fill='#FFF' /></svg>
        </a>
        <a id="discord" href="https://discord.gg/fKfbWQf" target="_blank" rel="noopener noreferrer">
          <svg viewBox='0 0 15 16' xmlns='http://www.w3.org/2000/svg'><path d='M13.106 0c.959 0 1.732.758 1.777 1.65V16l-1.825-1.515-1.002-.892-1.094-.932.457 1.47H1.848c-.956 0-1.732-.71-1.732-1.651V1.653C.116.761.893.002 1.85.002h11.25L13.106 0zM8.935 3.789h-.02l-.139.133c1.414.4 2.098 1.025 2.098 1.025a7.542 7.542 0 0 0-2.553-.758c-.593-.09-1.186-.043-1.688 0h-.136c-.32 0-1.002.133-1.916.49-.318.135-.501.224-.501.224s.683-.668 2.189-1.025l-.092-.09s-1.14-.043-2.371.847c0 0-1.23 2.096-1.23 4.68 0 0 .681 1.16 2.551 1.204 0 0 .273-.356.55-.668-1.05-.312-1.46-.936-1.46-.936s.091.044.228.133h.041c.02 0 .03.01.041.02v.004c.011.01.02.02.041.02.225.09.45.18.634.267.318.134.726.268 1.228.357a7.16 7.16 0 0 0 2.188 0c.41-.09.818-.178 1.227-.357.266-.133.594-.266.953-.491 0 0-.41.624-1.503.936.225.31.542.667.542.667 1.87-.04 2.597-1.2 2.638-1.151 0-2.58-1.237-4.68-1.237-4.68-1.115-.81-2.158-.84-2.342-.84l.038-.013v.002zm.114 2.942c.48 0 .866.4.866.89 0 .493-.389.893-.866.893a.88.88 0 0 1-.866-.89c.002-.493.39-.891.866-.891V6.73zm-3.097 0c.477 0 .863.4.863.89 0 .493-.389.893-.866.893a.88.88 0 0 1-.866-.89.88.88 0 0 1 .866-.891l.003-.002z' fill='#FFF' /></svg>
        </a>
        <a id="youtube" href="https://www.youtube.com/channel/UCz4VHzQLEG4UPPplNb-nEEA" target="_blank" rel="noopener noreferrer">
          <svg viewBox='0 0 21 16' xmlns='http://www.w3.org/2000/svg'><path d='M20.558 2.849A2.652 2.652 0 0 0 18.731.993C17.095.548 10.51.548 10.51.548S3.94.538 2.288.993A2.652 2.652 0 0 0 .461 2.849a28.204 28.204 0 0 0-.457 5.16 28.204 28.204 0 0 0 .457 5.14c.248.901.94 1.605 1.827 1.856 1.635.447 8.222.447 8.222.447s6.567 0 8.221-.447a2.652 2.652 0 0 0 1.827-1.856c.303-1.696.45-3.417.438-5.14a28.204 28.204 0 0 0-.438-5.16zM8.408 11.2V4.807l5.48 3.202-5.48 3.192z' fill='#FFF' /></svg>
        </a>
      </section>
    </div>
  </footer>
)

export default Footer
