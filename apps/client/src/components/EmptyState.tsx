import React, { useMemo } from 'react'
import {
    EmptyStateContainer,
    EmptyStateTitle,
    EmptyStateMessage,
    EmptyStateHint
} from './styles/EmptyStateStyles'

const EMPTY_STATE_MESSAGES = [
    '🎬 Plot twist: No movies found (but you found a great developer!)',
    '🎭 Movies Missing (Developer with Skills Found instead)',
    '📽️ Coming Soon: Your Next Developer (Currently handling empty states like a pro)',
    '🎟️ Two tickets please: One for the job, one for better search results',
]

const useRandomMessage = () => {
    return useMemo(() => {
        return EMPTY_STATE_MESSAGES[Math.floor(Math.random() * EMPTY_STATE_MESSAGES.length)]
    }, [])
}

export const EmptyState = (): React.ReactElement => {
    const message = useRandomMessage()

    return (
        <EmptyStateContainer>
            <EmptyStateTitle variant="h2">
                Movie not found!
            </EmptyStateTitle>
            <EmptyStateMessage variant="h6">
                {message}
            </EmptyStateMessage>
            <EmptyStateHint variant="body1">
                Try adjusting your search terms
            </EmptyStateHint>
        </EmptyStateContainer>
    )
}