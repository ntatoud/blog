import { FormattedDate } from '@/components/formatted-date';
import type { BlogPost } from '@/features/blog/schemas';

export function PostCard({ post }: { post?: BlogPost & { id: string } }) {
  if (!post) {
    return <EmptyPostCard />;
  }

  return (
    <a href={`/blog/${post.id}/`} className="group">
      <article className="relative rounded-md overflow-hidden bg-secondary/80 transition-all duration-100 h-full">
        <div className="mask-b-from-30%">
          {!!post.heroImage && (
            <img
              src={post.heroImage.src}
              alt={post.title}
              className="w-full transition-all aspect-video object-cover group-hover:scale-110"
            />
          )}
        </div>

        <div className="relative p-4 space-y-1 -mt-14">
          <FormattedDate
            date={post.pubDate}
            className="text-xs uppercase opacity-80 font-light"
          />
          <div className="font-semibold text-xl group-hover:text-primary/90 line-clamp-2">
            {post.title}
          </div>
          {post.tags && <p>{post.tags.join(', ')}</p>}
        </div>
      </article>
    </a>
  );
}

function EmptyPostCard() {
  return (
    <div className="relative flex bg-secondary/30 w-full uppercase aspect-video rounded-md text-center items-center justify-center overflow-hidden opacity-80">
      More content soon
      <div className="absolute bg-accent w-full h-full mask-b-from-30% -z-10"></div>
    </div>
  );
}
