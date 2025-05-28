<script lang="ts" setup>
import { LucideMail, LucideSmartphone, LucideCalculator, LucideFileText, LucideChartLine, LucideShieldCheck, LucideCalendar, LucideChartArea, LucideCheckCircle } from 'lucide-vue-next';

const services = [
  {
    id: 'bookkeeping',
    title: 'Bookkeeping & Accounting',
    text: 'Accurate recording of financial transactions, reconciliation, and maintenance of your books.',
    component: LucideCalculator
  },
  {
    id: 'financial',
    title: 'Financial Reporting',
    text: 'Detailed financial statements, cash flow analysis, and customized reports for your business.',
    component: LucideFileText
  },
  {
    id: 'tax',
    title: 'Tax Preparation',
    text: 'Comprehensive tax preparation services to ensure compliance and maximize deductions.',
    component: LucideChartLine
  },
  {
    id: 'payroll',
    title: 'Payroll Services',
    text: 'Complete payroll processing, tax filings, and compliance with employment regulations.',
    component: LucideShieldCheck
  },
  {
    id: 'planning',
    title: 'Financial Planning',
    text: 'Strategic financial planning and budgeting to help your business achieve its goals.',
    component: LucideCalendar
  },
  {
    id: 'business',
    title: 'Business Advisory',
    text: 'Expert advice on financial decisions, business growth strategies, and operational efficiency.',
    component: LucideChartArea
  }
]
</script>

<template>
  <main class="w-full min-h-screen relative">
    <header
      class="fixed z-20 top-0 flex justify-between items-center w-full py-5 px-10 shadow bg-white/70 backdrop-blur-md">
      <a href="#hero">
        <Logo class="h-8 lg:h-10" />
      </a>
      <nav class="hidden lg:flex items-center gap-4">
        <a href="#services"
          class="text-xl transition-all hover:text-primary">Services</a>
        <a href="#about"
          class="text-xl transition-all hover:text-primary">Why choose us</a>
        <a href="#contact"
          class="text-xl transition-all hover:text-primary">Contact</a>
      </nav>
      <div class="hidden lg:flex">
        <button class=" button button--blue text-sm">
          Schedule a consultation
        </button>
      </div>
    </header>
    <section id="hero"
      class="lg:h-screen w-full relative flex flex-col justify-center items-start bg-gradient-to-r from-black via-black/50 via-100% lg:via-40% to-transparent px-5 lg:px-10">

      <div class="lg:w-1/2 z-10 flex flex-col items-center justify-center py-44 lg:py-0 lg:p-5 space-y-6 lg:space-y-10">
        <h1 class="font-extrabold text-3xl md:text-6xl text-balance text-secondary leading-[0.90]">Professional
          Bookkeeping Services
          You Can Trust
        </h1>
        <p class="text-lg md:text-3xl text-white text-balance leading-[0.95]">Accurate financial records, timely
          reporting, and
          expert advice to
          help your business thrive.</p>
        <div class="flex flex-col md:flex-row gap-5 w-full">
          <button class="button button--primary">
            <LucideSmartphone />
            Call us for sonsultation
          </button>
          <button class="button button--secondary">
            <LucideMail />
            Send a message
          </button>
        </div>
      </div>

      <img src="assets/images/bg.jpg"
        class="w-full h-full object-cover absolute inset-0 -z-10" />
    </section>

    <section id="services"
      class="px-5 lg:px-10 py-24 lg:py-32 flex flex-col items-center">
      <div class="px-3 py-1 text-sm text-primary rounded-3xl bg-primary/20 mb-5">
        <span class="font-semibold text-primary">Our services</span>
      </div>
      <h2 class="text-3xl font-bold tracking-tighter sm:text-4xl text-primary mb-2 text-center">Comprehensive
        Bookkeeping Solutions
      </h2>
      <span class="text-lg text-center">We offer a full range of bookkeeping services tailored to meet your business
        needs.</span>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
        <div v-for="service in services"
          class="flex flex-col items-center justify-center shadow-md shadow-primary/30 space-y-4 max-w-xs border border-primary/30 p-5 rounded-3xl"
          :key="service.id">
          <div class="flex items-center justify-center p-5 rounded-full bg-primary/10">
            <component :is="service.component"
              :size="28"
              class="text-primary"></component>
          </div>
          <h4 class="text-center text-2xl text-balance font-semibold">{{ service.title }}</h4>
          <span class="text-balance text-center">{{ service.text }}</span>
        </div>
      </div>

    </section>
    <section id="about"
      class="w-full px-5 lg:px-10 py-24 lg:py-32 bg-primary/10">
      <div class=" px-4 md:px-6">
        <div class="grid gap-20 lg:grid-cols-2 lg:gap-6">
          <div class="flex items-center justify-center lg:w-[550px] lg:h-[550px] mx-auto">
            <img src="assets/images/human-touch.jpg"
              alt="Professional Bookkeepers"
              class="rounded-4xl object-cover w-full h-full shadow-lg shadow-primary/30" />
          </div>
          <div class="flex flex-col justify-center space-y-4">
            <div class="space-y-2">
              <div class="inline-block rounded-3xl bg-primary/10 px-3 py-1 text-sm text-primary">
                <span>Why Choose Us</span>
              </div>
              <h2 class="text-3xl font-bold tracking-tighter sm:text-4xl text-primary">
                Expert Bookkeeping with a Personal Touch
              </h2>
              <p class="max-w-[600px] md:text-xl/relaxed">
                We combine professional expertise with personalized service to deliver exceptional bookkeeping
                solutions.
              </p>
            </div>
            <div class="space-y-4">
              <div class="flex items-LucideStart gap-4">
                <LucideCheckCircle class="h-6 w-6 text-primary shrink-0" />
                <div>
                  <h3 class="font-bold">Certified Professionals</h3>
                  <p>
                    Our team consists of certified bookkeepers and accountants with years of experience.
                  </p>
                </div>
              </div>
              <div class="flex items-LucideStart gap-4">
                <LucideCheckCircle class="h-6 w-6 text-primary shrink-0" />
                <div>
                  <h3 class="font-bold">Tailored Solutions</h3>
                  <p>
                    We customize our services to meet the specific needs of your business.
                  </p>
                </div>
              </div>
              <div class="flex items-LucideStart gap-4">
                <LucideCheckCircle class="h-6 w-6 text-primary shrink-0" />
                <div>
                  <h3 class="font-bold">Timely and Accurate</h3>
                  <p>
                    We deliver accurate financial information when you need it, ensuring you can make informed
                    decisions.
                  </p>
                </div>
              </div>
              <div class="flex items-LucideStart gap-4">
                <LucideCheckCircle class="h-6 w-6 text-primary shrink-0" />
                <div>
                  <h3 class="font-bold">Advanced Technology</h3>
                  <p>
                    We use the latest accounting software and technology to streamline processes and enhance
                    accuracy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="w-full px-5 lg:px-10 py-24 lg:py-32 bg-primary">

      <div class="flex flex-col items-center justify-center space-y-4 text-center">
        <div class="lg:space-y-2 space-y-5">
          <h2 class="text-white text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Ready to Transform Your Bookkeeping?
          </h2>
          <p class="max-w-[900px] text-white/90 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Schedule a free consultation with our expert team today and discover how we can help your business
            thrive.
          </p>
        </div>
        <div class="flex flex-col gap-5 min-[400px]:flex-row">
          <button class="button button--primary">
            Schedule a Consultation
          </button>
        </div>
      </div>

    </section>

    <section id="contact"
      class="w-full px-5 lg:px-10 py-24 lg:py-32">

      <div class="grid gap-6 lg:grid-cols-2 lg:gap-12">
        <div class="flex flex-col justify-center space-y-4">
          <div class="space-y-2">
            <div class="inline-block rounded-3xl bg-primary/10 px-3 py-1 text-sm text-primary">
              <span>Contact Us</span>
            </div>
            <h2 class="text-3xl font-bold tracking-tighter sm:text-4xl text-primary">Get in Touch</h2>
            <p class="max-w-[400px] text-balance md:text-xl/relaxed">
              Have questions? Reach out to our team today.
            </p>
          </div>
          <div class="space-y-4">
            <div class="flex items-center gap-4">
              <LucidePhone class="h-6 w-6 text-primary" />
              <div>
                <p class="font-medium">LucidePhone</p>
                <p>(555) 123-4567</p>
              </div>
            </div>
            <div class="flex items-center gap-4">
              <LucideMail class="h-6 w-6 text-primary" />
              <div>
                <p class="font-medium">ELucideMail</p>
                <p>info@accubooks.com</p>
              </div>
            </div>
            <div class="flex items-center gap-4">
              <LucideCalendar class="h-6 w-6 text-primary" />
              <div>
                <p class="font-medium">Hours</p>
                <p>Monday - Friday: 9am - 5pm</p>
              </div>
            </div>
          </div>
        </div>
        <div class="rounded-4xl border border-primary/30 p-6 shadow-sm shadow-primary/30">
          <form class="space-y-4">
            <div class="grid gap-4 sm:grid-cols-2">
              <div class="space-y-2">
                <label htmlFor="first-name"
                  class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  First name
                </label>
                <Input id="first-name"
                  placeholder="Enter your first name" />
              </div>
              <div class="space-y-2">
                <label htmlFor="last-name"
                  class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Last name
                </label>
                <Input id="last-name"
                  placeholder="Enter your last name" />
              </div>
            </div>
            <div class="space-y-2">
              <label htmlFor="eLucideMail"
                class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                ELucideMail
              </label>
              <Input id="eLucideMail"
                placeholder="Enter your eLucideMail"
                type="eLucideMail" />
            </div>
            <div class="space-y-2">
              <label htmlFor="LucidePhone"
                class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                LucidePhone
              </label>
              <Input id="LucidePhone"
                placeholder="Enter your LucidePhone number"
                type="tel" />
            </div>
            <div class="space-y-2">
              <label htmlFor="message"
                class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Message
              </label>
              <Textarea id="message"
                placeholder="Enter your message"
                class="min-h-[120px]" />
            </div>
            <button class="button button--blue w-full flex items-center justify-center">
              Send Message
            </button>
          </form>
        </div>
      </div>

    </section>


    <footer class="w-full border-t-primary bg-primary/10 px-10 py-10">
      <div class="flex flex-col items-center justify-center gap-4 md:flex-row md:justify-between">
        <div class="flex items-center gap-2">
          <a href="#home">
            <Logo class="h-10" />
          </a>
        </div>
        <nav class="flex gap-4 sm:gap-6">
          <a href="#"
            class="text-sm font-medium hover:underline underline-offset-4">
            Privacy Policy
          </a>
          <a href="#"
            class="text-sm font-medium hover:underline underline-offset-4">
            Terms of Service
          </a>
          <a href="#"
            class="text-sm font-medium hover:underline underline-offset-4">
            Sitemap
          </a>
        </nav>
        <p class="text-sm">© {{ new Date().getFullYear() }} Fiducia Financials. All rights reserved.</p>
      </div>
    </footer>
  </main>
</template>
<style scoped>
@reference "../assets/css/main.css";

.button {
  @apply flex items-center font-semibold gap-2.5 text-xl rounded-4xl py-5 px-10 transition-all;
}

.button.button--primary {
  @apply bg-secondary hover:brightness-75;
}

.button.button--secondary {
  @apply bg-white hover:brightness-90;
}

.button.button--blue {
  @apply bg-primary py-2.5 text-lg text-white;
}
</style>