/*eslint-env node */
import { fakerEN_US as faker } from '@faker-js/faker'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(process.env.VITE_SUPABASE_URL, process.env.VITE_SUPABASE_KEY)

const seedProjects = async () => {
  const name = faker.lorem.words(3)
  const {data,error,status}= await supabase.from('projects').insert({
    name,
    slug: name.toLowerCase().replace(/ /g, '-'),
    status: faker.helpers.arrayElement(['in-progress', 'completed']),
    collaborators: faker.helpers.arrayElements([1, 2, 3])
  })
  console.log(data,status,error);

}

await seedProjects()
