import { userService } from '@/services/api/user.service'
import {} from '@contracts/contracts/src/http/user/get-user-by-id'

export default async function Home() {
  const { user } = await userService.getById({ userId: 'fake-id' })

  return (
    <div>
      {user.id}
      {user.name}
      {user.email}
    </div>
  )
}
