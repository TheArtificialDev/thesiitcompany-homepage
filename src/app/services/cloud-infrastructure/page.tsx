import { Metadata } from 'next'
import CloudInfrastructurePageContent from '@/components/CloudInfrastructurePageContent'

export const metadata: Metadata = {
  title: 'Cloud Infrastructure Services - The SIIT Company',
  description: 'AWS, Azure, Google Cloud infrastructure setup, migration, and management services.',
}

export default function CloudInfrastructurePage() {
  return <CloudInfrastructurePageContent />
}
