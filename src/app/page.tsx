import { Metadata } from 'next'
import { PAGE_DESCRIPTION } from '@/ultil/const'
import { Wrapper } from '@/app/(components)/wrapper'

export const metadata: Metadata = {
  title: 'Home',
  description: PAGE_DESCRIPTION,
}

export default function Home() {
  return (
    <Wrapper>
      <div className="container mt-[40px]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas tempora
        molestias delectus? Necessitatibus fugit a adipisci, nisi atque
        consequatur possimus obcaecati sequi? Fugiat cupiditate in totam.
        Maiores, vel tempore? Maxime!
      </div>
    </Wrapper>
  )
}
