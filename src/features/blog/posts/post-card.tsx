import { ArrowRight } from 'lucide-react';

import { FormattedDate } from '@/components/formatted-date';
import { Button } from '@/components/ui/button';
import type { BlogPost } from '@/features/blog/schemas';

export function PostCard(post: BlogPost & { id: string }) {
  return (
    <a href={`/blog/${post.id}/`} className="group">
      <article className="rounded-md overflow-hidden group-hover:scale-[101%] bg-sidebar transition-all duration-100">
        <div className="relative mask-b-from-sidebar mask-b-to-80%">
          {!!post.heroImage && (
            <img
              src={post.heroImage.src}
              alt={post.title}
              className="w-full aspect-video object-cover"
            />
          )}

          {/* Gradient overlay */}
        </div>

        {/* Actual content – no longer under absolute */}
        <div className="relative z-10 p-4 space-y-1 -mt-28">
          <FormattedDate
            date={post.pubDate}
            className="text-xs uppercase opacity-80 font-light"
          />
          <div className="font-semibold text-xl group-hover:text-primary">
            {post.title}
          </div>
          <div className="truncate">{post.description}</div>
          <div className="flex justify-end">
            <Button size="sm" variant="link">
              Keep reading <ArrowRight />
            </Button>
          </div>
        </div>
      </article>
    </a>
  );
}
