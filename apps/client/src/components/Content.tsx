import React from 'react'

import { Code as CodeIcon, Api as ApiIcon, AccountTree as AccountTreeIcon, AutoStories as AutoStoriesIcon } from '@mui/icons-material'
import { Box, Typography } from '@mui/material'

import { Logo } from './Logo'
import {
  ContainerCard,
  ContentStack,
  ItemStack,
  StyledEndpointItem,
  StyledDocLink,
  EndpointList,
  ItemTitle,
  ItemDescription,
} from './styles/ContentStyles'

interface EndpointItemProps {
  description: string
}

const EndpointItem = ({ description }: EndpointItemProps): React.ReactElement => (
  <StyledEndpointItem
    component="li"
    variant="body2"
  >
    {description}
  </StyledEndpointItem>
)

interface DocLinkProps {
  href: string
  children: React.ReactNode
}

const DocLink = ({ href, children }: DocLinkProps): React.ReactElement => (
  <StyledDocLink
    href={href}
    target="_blank"
    rel="noopener noreferrer"
  >
    {children}
  </StyledDocLink>
)

interface ContentItem {
  icon: React.ReactElement
  title: string
  description: string | React.ReactNode
}

const items: ContentItem[] = [
  {
    icon: <CodeIcon sx={{ color: 'text.secondary' }} />,
    title: 'Test Assignment for Entain',
    description:
      'A full-stack application built with React, Nest.js, TypeScript and RTK Query for data fetching and caching, demonstrating modern web development practices.',
  },
  {
    icon: <ApiIcon sx={{ color: 'text.secondary' }} />,
    title: 'API Integration',
    description: (
      <EndpointList component="ul">
        <EndpointItem description="Discover movies by genre IDs" />
        <EndpointItem description="Get movies with flexible parameter support" />
        <EndpointItem description="Search movies by title" />
        <EndpointItem description="Get all available movie genres (cached for 24 hours)" />
      </EndpointList>
    ),
  },
  {
    icon: <AccountTreeIcon sx={{ color: 'text.secondary' }} />,
    title: 'Project Structure',
    description:
      'Organized as a monorepo with shared types, Docker support, and comprehensive environment configuration for seamless development.',
  },
  {
    icon: <AutoStoriesIcon sx={{ color: 'text.secondary' }} />,
    title: 'Full Documentation',
    description: (
      <Typography
        variant="body2"
        sx={{ color: 'text.secondary' }}
      >
        The project features documentation to help you get started quickly. Find the setup guide in the{' '}
        <DocLink href="https://github.com/raigos/cine-stack/blob/main/README.md">README</DocLink> and implementation details in the{' '}
        <DocLink href="https://github.com/raigos/nfluencer-management/blob/main/docs/comments.MD">comments guide</DocLink>.
      </Typography>
    ),
  },
]

export function Content(): React.ReactElement {
  return (
    <ContainerCard>
      <ContentStack>
        <Box sx={{ display: { xs: 'none', lg: 'flex' } }}>
          <Logo />
        </Box>
        {items.map((item, index) => (
          <ItemStack key={index}>
            {item.icon}
            <Box>
              <ItemTitle>{item.title}</ItemTitle>
              {typeof item.description === 'string' ? (
                <ItemDescription variant="body2">{item.description}</ItemDescription>
              ) : (
                item.description
              )}
            </Box>
          </ItemStack>
        ))}
      </ContentStack>
    </ContainerCard>
  )
}
