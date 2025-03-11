"use client";

import { Button } from '@/components/ui/button'
import { trpc } from '@/trpc/client';
import { Loader2Icon, PlusIcon } from 'lucide-react'
import { toast } from 'react-hot-toast';

export const StudioUploadModal = () => {
    const utils = trpc.useUtils();
    const create = trpc.videos.create.useMutation({
        onSuccess: () => {
            toast.success('Video created', {
                style: {
                    border: '5px solid #FFFAEE',
                    padding: '22px',
                    color: '#FFFAEE',
                    backgroundColor: '#166107',
                },
                iconTheme: {
                    primary: '#FFFAEE',
                    secondary: '#166107',
                },
            });
            utils.studio.getMany.invalidate();
        },
        onError: (error) => {
            toast.success(error.message, {
                style: {
                    border: '5px solid #FFFAEE',
                    padding: '22px',
                    color: '#FFFAEE',
                    backgroundColor: '#781504',
                },
                iconTheme: {
                    primary: '#FFFAEE',
                    secondary: '#781504',
                },
            });
        }
    });

    return (
        <Button variant='secondary' onClick={() => create.mutate()} disabled={create.isPending}>
            {create.isPending ? <Loader2Icon className='animate-spin' /> : <PlusIcon />}
            Create
        </Button>
    )
}
