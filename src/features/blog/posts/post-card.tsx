import { cn } from '@/lib/utils';
import { FormattedDate } from '@/components/formatted-date';
import type { BlogPost } from '@/features/blog/schemas';

export function PostCard(post: BlogPost & { id: string }) {
  return (
    <a href={`/blog/${post.id}/`} className="group">
      <article className="rounded-md overflow-hidden bg-sidebar transition-all duration-100">
        <div
          className={cn(
            'relative',
            'mask-b-from-sidebar/40 light:mask-b-from-sidebar t3-chat:mask-b-from-sidebar',
            'group-hover:mask-b-from-sidebar/60 light:group-hover:mask-b-from-sidebar/90 t3-chat:group-hover:mask-b-from-sidebar/90'
          )}
        >
          {!!post.heroImage && (
            <img
              src={post.heroImage.src}
              alt={post.title}
              className="w-full transition-all aspect-video object-cover group-hover:scale-105"
            />
          )}
        </div>

        <div className="relative p-4 space-y-1 -mt-28">
          <FormattedDate
            date={post.pubDate}
            className="text-xs uppercase opacity-80 font-light"
          />
          <div className="font-semibold text-xl group-hover:text-primary">
            {post.title}
          </div>
          <div className="truncate">{post.description}</div>
          {/* <div className="flex justify-end">
            <div className={buttonVariants({ size: 'sm', variant: 'link' })}>
              Keep reading <ArrowRight />
            </div>
          </div> */}
        </div>
      </article>
    </a>
  );
}
