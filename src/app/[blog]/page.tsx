

import Image from "next/image";

export default function page() {
  return (
    <article className="mt-12 mb-24 px-2 2xl:px-12 flex flex-col gap-y-8">
      {/* Blog Title */}
      <h1 className="text-xl xs:text-3xl lg:text-5xl font-bold text-dark dark:text-light">
      Promote Your Book with Title Discovery

</h1>
      
      <Image
        src= {"/img.png"}
        width= {300}
        height= {300}
        alt="AI for everyone"
        className="rounded border-black"
      /> 
      {/* Blog Summary Section */}
      <section>
      <h2 className="text-xl xs:text-2xl md:text-3xl font-bold uppercase text-accentDarkPrimary">
        Summary
      </h2>
      
      
      <p className="text-lg leading-normal text-dark/80 dark:text-light/80">
      Self-publishing your book is quite an accomplishment but unless you printed something deeply personal thats just for you or a gift for someone close you want everyone to buy and read your book. As an indie author marketing is a huge part of your job and IngramSpark has many resources to make that easier. One of our newest opportunities is Title Discovery Promotion

Put succinctly The Title Discovery Promotion provides marketing and merchandising opportunities for authors and publishers to have their books promoted to retailers libraries and community reader sites. Youll be able to use digital ad campaigns book lists giveaway mailings and more to raise awareness for your books and reach more readers There are two packages available Discovery Basic and Discovery Boost

Discovery Basic costs $350 per ISBN  With this package your book will be included in exclusive curated lists like IngramSparks seasonal books catalog shared with booksellers book lists and themed articles on popular e-commerce and reader community sites and targeted digital book flyers delivered to independent retailers

Discovery Boost costs $500 per ISBN You ll get all the resources in Discovery Basic plus you gain valuable insights and optimize your book metadata with recommendations from book selling experts samples of your book are made available for retail and library buyers giveaways and reviews on reader community sites; the Ingram Content Group sales teams in the U.S. and UK will be made aware of your book and we will provide promotion within the Ingram Content Group UK book ordering catalog

Register your interest for the package thats right for you

IngramSpark identifies books eligible for inclusion based on data and trend analysis. Books can be frontlist or recent backlist but must be enabled for distribution. Books with trade wholesale terms ex. 55% wholesale discount returnable will be considered. For the best chance of being included in curated content please review and follow our metadata best practices Good metadata is key to being found by retailers and libraries.

If your book is chosen for inclusion in the promotion you will receive an email notification. Once the book or books have been listed by our team you will receive a proof of performance email containing links to your books postings so you can share via your social media and marketing efforts Promotions occur throughout the year and each one will last at least three months These promotional packages are currently only available for US based accounts.</p>
</section>
      <section className="px-2 sm:px-8 md:px-12 flex gap-2 xs:gap-4 sm:gap-6 items-start xs:items-center justify-start">
         <Image
          src={"/images (1).jpeg"}
          width={100}
          height={100}
          alt="author"
          className="object-cover rounded-full h-12 w-12 sm:h-24 sm:w-24"
        /> 
        <div className="flex flex-col gap-1">
          <h3 className="text-xl font-bold text-dark dark:text-light">Isha khan</h3>
          <p className="italic text-xs xs:text-sm sm:text-base text-dark/80 dark:text-light/80">
          Experienced Marketing | Designing .
          </p>
        </div>
      </section>

      {/* <section className="text-lg leading-normal text-dark/80 dark:text-light/80">
        <PortableText value={data.block} />
        <CommentBox />
      </section>
       */}
    </article>
  );

}