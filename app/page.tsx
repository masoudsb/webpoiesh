import DarkSection from '@/components/darkSection'
import DesSection from '@/components/desSection'
import Hero from '@/components/hero'
import ImgSection from '@/components/imgSection'
import MonitorSection from '@/components/monitorSection'
import PowerSection from '@/components/powerSection'
import Step1Section from '@/components/step1Section'
import Step2Section from '@/components/step2Section'
import Step3Section from '@/components/step3Section'
import TypeSection from '@/components/typeSection'
import { Flex } from '@/libs/primitives'

export default function LandingPage() {
  return (
    <Flex  justifyContent={'center'} alignItems={'center'}>
      {' '}
     <Hero/>
     <ImgSection/>
     <DesSection/>
     <Step1Section/>
     <Step2Section/>
     <Step3Section/>
     <DarkSection/>
     <TypeSection/>
     <PowerSection/>
     <MonitorSection/>
    </Flex>
    
  )
}
