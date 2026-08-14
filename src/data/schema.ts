// Shared JSON-LD builders: BlogPosting for blog posts, BreadcrumbList for inner pages.
// Keeps schema consistent and references the sitewide LocalBusiness entity in Layout.astro.

const SITE_ORIGIN = 'https://iwctpainting.com';

export type BlogPostingInput = {
  /** Page headline (can differ from the <title> tag). */
  headline: string;
  description: string;
  /** Path of the post, e.g. '/blog/my-post'. */
  path: string;
  /** Public image path for the post, e.g. '/images/blog/my-post.jpg'. */
  image: string;
  /** ISO date, e.g. '2026-05-29'. */
  datePublished: string;
  /** ISO date; defaults to datePublished. */
  dateModified?: string;
};

/** BlogPosting schema with IWCT as author/publisher (via the sitewide #localbusiness id). */
export function blogPostingSchema(input: BlogPostingInput) {
  const url = `${SITE_ORIGIN}${input.path}`;
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: input.headline,
    description: input.description,
    url,
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    image: `${SITE_ORIGIN}${input.image}`,
    datePublished: input.datePublished,
    dateModified: input.dateModified ?? input.datePublished,
    author: {
      '@type': 'Organization',
      name: 'If Walls Could Talk LLC',
      url: `${SITE_ORIGIN}/`,
    },
    publisher: { '@id': `${SITE_ORIGIN}/#localbusiness` },
    inLanguage: 'en-US',
  };
}

export type FaqEntry = {
  question: string;
  answer: string;
};

/** FAQPage schema from a list of question/answer pairs (matches FaqSection items). */
export function faqPageSchema(faqs: FaqEntry[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

export type BreadcrumbItem = {
  name: string;
  /** Path for the crumb, e.g. '/services'. Omit for the current (last) page. */
  path?: string;
};

/** BreadcrumbList schema. Pass crumbs in order, ending with the current page. */
export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      ...(item.path ? { item: `${SITE_ORIGIN}${item.path}` } : {}),
    })),
  };
}
