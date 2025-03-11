import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { useEffect } from "react";
import { Button } from "./ui/button";

interface InfiniteScrollProps {
    isManual?: boolean;
    hasNextPage: boolean;
    isFethingNextPage: boolean;
    fetchNextPage: () => void;
};

export const InfiniteScroll = ({
    isManual = false,
    hasNextPage,
    isFethingNextPage,
    fetchNextPage
}: InfiniteScrollProps) => {
    const { targetRef, isIntersecting } = useIntersectionObserver({
        threshold: 0.5,
        rootMargin: "100px"
    });

    useEffect(() => {
        if (isIntersecting && hasNextPage && !isFethingNextPage && !isManual) {
            fetchNextPage();
        }
    }, [isIntersecting, hasNextPage, isFethingNextPage, isManual, fetchNextPage]);

    return (
        <div className=" flex flex-col items-center gap-4 p-4">
            <div ref={targetRef} className="h-1" />
            {hasNextPage ? (
                <Button
                    variant='secondary'
                    disabled={!hasNextPage || isFethingNextPage}
                    onClick={() => fetchNextPage()}
                >
                    {isFethingNextPage ? "Loading" : "Load more"}
                </Button>
            ) :
                <p className="text-xs text-muted-foreground">
                    You have reached the end of the list
                </p>
            }
        </div>
    )
}