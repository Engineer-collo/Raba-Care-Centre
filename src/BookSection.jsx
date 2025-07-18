import React from 'react';

const BooksSection = () => {
  return (
    <section id="products" className="scroll-mt-20 py-12 px-6 max-w-6xl mx-auto text-center bg-gray-50 dark:bg-gray-900">
      <h2 className="text-4xl font-bold mb-12 text-gray-800 dark:text-white">Books by Redempta Kanja</h2>
      <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed text-center max-w-3xl mx-auto pb-12">
        Each of these books is a movement — a bold call to rise, reclaim your identity, unlock your purpose, and take
        radical responsibility for your life. They are tools for personal transformation. Dive in, reflect deeply, and
        allow these books to unravel your unfolding.
      </p>

      <div className="grid gap-10 md:grid-cols-3 sm:grid-cols-2 justify-items-center">
        {/* Book 1 */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow w-full max-w-sm text-left">
          <a
            href="https://selar.com/w7e7g0"
            target="_blank"
            rel="noopener noreferrer"
            className="block mb-5"
          >
            <img
              className="rounded-lg h-48 mx-auto object-contain transition-transform duration-300 hover:scale-105"
              src="/find.png"
              alt="Find and Adopt Your Purpose"
            />
          </a>
          <h4 className="font-semibold text-xl mb-3 text-gray-800 dark:text-white">Find Adopt Live Your Purpose</h4>
          <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed max-h-[360px] overflow-y-auto pr-1">
            This book is for anyone who has doubted their potential or settled for less. It’s a heartfelt reminder that
            discovering, embracing, and living your purpose is possible and necessary. Through practical tools, you'll:
            <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-600 dark:text-gray-400">
              <li>Identify and verify your true purpose</li>
              <li>Debunk myths that hold you back</li>
              <li>Position yourself confidently for fulfillment</li>
              <li>Develop healthy, purpose-driven habits</li>
            </ul>
            <br />
            Begin your journey to a bold, purposeful life — you deserve it!
          </p>
        </div>

        {/* Book 2 */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow w-full max-w-sm text-left">
          <a
            href="https://selar.com/z74ln7"
            target="_blank"
            rel="noopener noreferrer"
            className="block mb-5"
          >
            <img
              className="rounded-lg h-48 mx-auto object-contain transition-transform duration-300 hover:scale-105"
              src="/taking-charge.png"
              alt="Taking Charge"
            />
          </a>
          <h4 className="font-semibold text-xl mb-3 text-gray-800 dark:text-white">Taking Charge</h4>
          <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed max-h-[360px] overflow-y-auto pr-1">
            A bold invitation to rise above fear, failures, and limits — "Taking Charge" helps you discover your authentic identity,
            rewrite your story, and ignite the gifts within you. You’ll learn how to:
            <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-600 dark:text-gray-400">
              <li>Transcend past pain and limitations</li>
              <li>Unlock your potential and influence</li>
              <li>Reclaim forgotten dreams</li>
              <li>Be a powerful force of transformation</li>
            </ul>
            <br />
            Step into your greatness — the world is waiting.
          </p>
        </div>

        {/* Book 3 */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow w-full max-w-sm text-left">
          <a
            href="https://selar.com/477103"
            target="_blank"
            rel="noopener noreferrer"
            className="block mb-5"
          >
            <img
              className="rounded-lg h-48 mx-auto object-contain transition-transform duration-300 hover:scale-105"
              src="/princes.png"
              alt="Princes And Princesses"
            />
          </a>
          <h4 className="font-semibold text-xl mb-3 text-gray-800 dark:text-white">Princes & Princesses</h4>
          <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed max-h-[360px] overflow-y-auto pr-1">
            A modern-day book of proverbs for the next generation. Inspired by a mother’s love, it shares biblical wisdom to
            shape young lives. Children and parents alike will:
            <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-600 dark:text-gray-400">
              <li>Affirm identity and spiritual heritage</li>
              <li>Navigate life’s challenges with truth</li>
              <li>Develop purpose-filled character</li>
              <li>Grow with faith, wisdom, and grace</li>
            </ul>
            <br />
            This isn’t just a book — it’s a legacy of wisdom and identity.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BooksSection;
