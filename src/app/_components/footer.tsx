export default function Footer() {
  return (
    <footer className="bg-indigo-700 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
          <div>
            <h2 className="text-lg font-semibold mb-2">
              <span role="img" aria-label="movie icon"></span> Movie Z
            </h2>
            <p>© 2024 Movie Z. All Rights Reserved.</p>
          </div>

          <div>
            <h2 className="text-lg w-[247px] h-[52px] font-semibold mb-2">
              Contact Information
            </h2>
            <p>
              Email:{" "}
              <a href="mailto:support@moviez.com" className="underline">
                support@movieZ.com
              </a>
            </p>
            <p>Phone: +976 (11) 123-4567</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">Follow us</h2>
            <div className="flex justify-center md:justify-start gap-4">
              <a href="#" className="hover:underline">
                Facebook
              </a>
              <a href="#" className="hover:underline">
                Instagram
              </a>
              <a href="#" className="hover:underline">
                Twitter
              </a>
              <a href="#" className="hover:underline">
                YouTube
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
