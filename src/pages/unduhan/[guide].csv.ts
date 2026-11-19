import type { APIRoute, GetStaticPaths } from 'astro';
import { guides } from '../../k3-guides';

export const getStaticPaths = (() =>
  guides.map((guide) => ({ params: { guide: guide.slug }, props: { asset: guide.asset } }))
) satisfies GetStaticPaths;

export const GET: APIRoute = ({ props }) => {
  const { columns, examples } = props.asset as (typeof guides)[number]['asset'];
  const blankRow = columns.map(() => '');
  const rows = [columns, ...examples, blankRow];
  const csv = rows.map((row) => row.map((value) => `"${value.replaceAll('"', '""')}"`).join(',')).join('\r\n');

  return new Response(`\uFEFF${csv}\r\n`, {
    headers: { 'Content-Type': 'text/csv; charset=utf-8' },
  });
};
