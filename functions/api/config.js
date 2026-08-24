export async function onRequest(context) {
  const env = context.env || {};
  const rawSites = env.SITES || env.PUBLIC_SITES || env.MATH_SITES || '';
  const pageTitle = env.PAGE_TITLE || '';
  const pageSubtitle = env.PAGE_SUBTITLE || '';
  const heroBadge = env.HERO_BADGE || '';

  return new Response(
    JSON.stringify({
      configured: Boolean(rawSites || pageTitle),
      rawSites,
      pageTitle,
      pageSubtitle,
      heroBadge
    }),
    {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'Cache-Control': 'no-cache, no-store, must-revalidate'
      }
    }
  );
}
