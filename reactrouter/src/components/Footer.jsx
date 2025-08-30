import React from "react";

function Footer() {
  return (
    <>
      <footer className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 border-t-1 h-auto mx-16 py-6 mt-11 mb-8">
        <section>
          <h3 className="font-bold mb-2">About</h3>
          <p className="text-sm text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Praesentium error exercitationem culpa quisquam omnis corrupti.
          </p>
          <p className="mt-2">
            <strong>Email:</strong>
            <span className="ml-2 text-gray-700">abc@email.com</span>
          </p>
          <p>
            <strong>Phone:</strong>
            <span className="ml-2 text-gray-700">+9233xxxxxxxx</span>
          </p>
        </section>
        <section>
          <h3 className="font-bold mb-2">QuickLink</h3>
          <ul className="space-y-1 text-sm text-gray-600">
            <li>
              <a href="#" className="hover:text-blue-600">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                Archived
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                Author
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                Contact
              </a>
            </li>
          </ul>
        </section>
        <section>
          <h3 className="font-bold mb-2">Category</h3>
          <ul className="space-y-1 text-sm text-gray-600">
            <li>LifeStyle</li>
            <li>Technology</li>
            <li>Travel</li>
            <li>Business</li>
            <li>Economy</li>
            <li>Sports</li>
          </ul>
        </section>
      </footer>
    </>
  );
}

export default Footer;
