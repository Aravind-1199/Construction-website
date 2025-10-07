export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  location: string;
  completed: string;
  client: string;
  description: string;
}

export const projects: Project[] = [
    {
      id: 1,
      title: 'Modern Office Complex',
      category: 'Commercial',
      image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800',
      location: 'Downtown District',
      completed: '2024',
      client: 'TechCorp Industries',
      description: 'A state-of-the-art 50,000 sq ft office complex featuring modern design and sustainable construction practices.'
    },
    {
      id: 2,
      title: 'Luxury Family Home',
      category: 'Residential',
      image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800',
      location: 'Hillside Estates',
      completed: '2023',
      client: 'Private Client',
      description: 'Custom 4,500 sq ft luxury home with premium finishes and smart home technology integration.'
    },
    {
      id: 3,
      title: 'Retail Shopping Center',
      category: 'Commercial',
      image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800',
      location: 'West Side Plaza',
      completed: '2023',
      client: 'Retail Partners LLC',
      description: 'Multi-tenant retail center with 15 units, modern amenities, and ample parking facilities.'
    },
    {
      id: 4,
      title: 'Historic Building Renovation',
      category: 'Renovation',
      image: 'https://images.pexels.com/photos/1591170/pexels-photo-1591170.jpeg?auto=compress&cs=tinysrgb&w=800',
      location: 'Historic Downtown',
      completed: '2024',
      client: 'City Development',
      description: 'Complete renovation of a 1920s historic building while preserving its architectural heritage.'
    },
    {
      id: 5,
      title: 'Industrial Warehouse',
      category: 'Industrial',
      image: 'https://images.pexels.com/photos/4491461/pexels-photo-4491461.jpeg?auto=compress&cs=tinysrgb&w=800',
      location: 'Industrial Park',
      completed: '2023',
      client: 'Logistics Solutions',
      description: '100,000 sq ft distribution center with advanced loading systems and energy-efficient design.'
    },
    {
      id: 6,
      title: 'Modern Apartment Complex',
      category: 'Residential',
      image: 'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=800',
      location: 'Metro Heights',
      completed: '2024',
      client: 'Metro Housing',
      description: '120-unit apartment complex with community amenities and sustainable building features.'
    }
  // add more projects
];
