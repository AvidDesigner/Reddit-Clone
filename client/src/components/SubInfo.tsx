import dayjs from 'dayjs'
import Link from 'next/link'
import React from 'react'
import { useAuthState } from '../context/auth'

export default function SubInfo({ sub }) {
    const { authenticated } = useAuthState()
    return (
        <div className="mb-2 ml-6 w-80">
            <div className="bg-white rounded">
                <div className="p-3 bg-blue-500 rounded-t">
                    <p className="font-semibold text-white">
                        About Community
                    </p>
                </div>
                <div className="flex-wrap p-3 break-words">
                    <p className="mb-3 text-md">{sub.description}</p>
                    <div className="flex mb-3 text-sm font-medium">
                        <div className="w-1/2">
                            <p>2.9k</p>
                            <p>members</p>
                        </div>
                        <div className="w-1/2">
                            <p>101</p>
                            <p>online</p>
                        </div>
                    </div>
                    <p className="my-3">
                        <i className="mr-2 fas fa-birthday-cake"></i>
                        Created {dayjs(sub.createdAt).format('D MMM YYYY')}
                    </p>
                    {authenticated && (
                        <Link href={`/r/${sub.name}/submit`}>
                            <a className="w-full py-1 text-sm blue button">Create Post</a>
                        </Link>
                    )}
                </div>
            </div>
        </div>
    )
}
