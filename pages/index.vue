<script lang="ts" setup>
</script>

<template>
  <div class="flex min-h-screen flex-col">
      <header class="sticky top-0 z-40 border-b bg-white">
        <div class="container mx-auto flex h-16 items-center justify-between py-4">
          <div class="flex items-center gap-2">
            <LucideChartArea class="h-6 w-6 text-primary" />
            <span class="text-xl font-bold">AccuBooks</span>
          </div>
          <nav class="hidden md:flex gap-6">
            <a href="#services" class="text-sm font-medium hover:text-primary">
              Services
            </a>
            <a href="#about" class="text-sm font-medium hover:text-primary">
              About Us
            </a>
            <a href="#testimonials" class="text-sm font-medium hover:text-primary">
              Testimonials
            </a>
            <a href="#contact" class="text-sm font-medium hover:text-primary">
              Contact
            </a>
          </nav>
          <div>
            <Button>Get Started</Button>
          </div>
        </div>
      </header>
      <main class="flex-1">
        
        <section class="w-full py-12 md:py-24 lg:py-32 bg-slate-50">
          <div class="container mx-auto px-4 md:px-6">
            <div class="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div class="flex flex-col justify-center space-y-4">
                <div class="space-y-2">
                  <h1 class="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-primary">
                    Professional Bookkeeping Services You Can Trust
                  </h1>
                  <p class="max-w-[600px] text-slate-700 md:text-xl">
                    Accurate financial records, timely reporting, and expert advice to help your business thrive.
                  </p>
                </div>
                <div class="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" class="bg-primary hover:bg-primary/90">
                    Schedule a Consultation
                  </Button>
                  <Button size="lg" variant="outline">
                    Learn More
                  </Button>
                </div>
                <div class="flex items-center gap-4 pt-4">
                  <div class="flex -space-x-2">
                    <img
                      src="https://placehold.co/40x40"
                      alt="User"
                      width="40"
                      height="40"
                      class="rounded-full border-2 border-white"
                    />
                    <img
                      src="https://placehold.co/40x40"
                      alt="User"
                      width="40"
                      height="40"
                      class="rounded-full border-2 border-white"
                    />
                    <img
                      src="https://placehold.co/40x40"
                      alt="User"
                      width="40"
                      height="40"
                      class="rounded-full border-2 border-white"
                    />
                  </div>
                  <div class="text-sm text-slate-600">
                    Trusted by <span class="font-medium">500+</span> businesses
                  </div>
                </div>
              </div>
              <div class="flex items-center justify-center">
                <img
                  src="https://placehold.co/550x550"
                  alt="Bookkeeping Services"
                  width="550"
                  height="550"
                  class="rounded-lg object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        
        <section class="w-full py-12 md:py-16 lg:py-20 border-y border-slate-200">
          <div class="container mx-auto px-4 md:px-6">
            <div class="flex flex-col items-center justify-center space-y-4 text-center">
              <div class="space-y-2">
                <h2 class="text-xl font-medium tracking-tight text-slate-700">Trusted by Leading Businesses</h2>
              </div>
              <div class="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
                <img src="https://placehold.co/120x40" alt="Company Logo" width="120" height="40" />
                <img src="https://placehold.co/120x40" alt="Company Logo" width="120" height="40" />
                <img src="https://placehold.co/120x40" alt="Company Logo" width="120" height="40" />
                <img src="https://placehold.co/120x40" alt="Company Logo" width="120" height="40" />
                <img src="https://placehold.co/120x40" alt="Company Logo" width="120" height="40" />
              </div>
            </div>
          </div>
        </section>

        
        <section id="services" class="w-full py-12 md:py-24 lg:py-32">
          <div class="container mx-auto px-4 md:px-6">
            <div class="flex flex-col items-center justify-center space-y-4 text-center">
              <div class="space-y-2">
                <div class="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Our Services</div>
                <h2 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
                  Comprehensive Bookkeeping Solutions
                </h2>
                <p class="max-w-[900px] text-slate-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We offer a full range of bookkeeping services tailored to meet your business needs.
                </p>
              </div>
            </div>
            <div class="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div class="flex flex-col items-center space-y-4 rounded-lg border border-slate-200 p-6 shadow-sm transition-all hover:shadow-md">
                <div class="rounded-full bg-primary/10 p-3">
                  <LucideCalculator class="h-6 w-6 text-primary" />
                </div>
                <h3 class="text-xl font-bold">Bookkeeping & Accounting</h3>
                <p class="text-center text-slate-700">
                  Accurate recording of financial transactions, reconciliation, and maintenance of your books.
                </p>
              </div>
              <div class="flex flex-col items-center space-y-4 rounded-lg border border-slate-200 p-6 shadow-sm transition-all hover:shadow-md">
                <div class="rounded-full bg-primary/10 p-3">
                  <LucideFileText class="h-6 w-6 text-primary" />
                </div>
                <h3 class="text-xl font-bold">Financial Reporting</h3>
                <p class="text-center text-slate-700">
                  Detailed financial statements, cash flow analysis, and customized reports for your business.
                </p>
              </div>
              <div class="flex flex-col items-center space-y-4 rounded-lg border border-slate-200 p-6 shadow-sm transition-all hover:shadow-md">
                <div class="rounded-full bg-primary/10 p-3">
                  <LucideLineChart class="h-6 w-6 text-primary" />
                </div>
                <h3 class="text-xl font-bold">Tax Preparation</h3>
                <p class="text-center text-slate-700">
                  Comprehensive tax preparation services to ensure compliance and maximize deductions.
                </p>
              </div>
              <div class="flex flex-col items-center space-y-4 rounded-lg border border-slate-200 p-6 shadow-sm transition-all hover:shadow-md">
                <div class="rounded-full bg-primary/10 p-3">
                  <LucideShieldCheck class="h-6 w-6 text-primary" />
                </div>
                <h3 class="text-xl font-bold">Payroll Services</h3>
                <p class="text-center text-slate-700">
                  Complete payroll processing, tax filings, and compliance with employment regulations.
                </p>
              </div>
              <div class="flex flex-col items-center space-y-4 rounded-lg border border-slate-200 p-6 shadow-sm transition-all hover:shadow-md">
                <div class="rounded-full bg-primary/10 p-3">
                  <LucideCalendar class="h-6 w-6 text-primary" />
                </div>
                <h3 class="text-xl font-bold">Financial Planning</h3>
                <p class="text-center text-slate-700">
                  Strategic financial planning and budgeting to help your business achieve its goals.
                </p>
              </div>
              <div class="flex flex-col items-center space-y-4 rounded-lg border border-slate-200 p-6 shadow-sm transition-all hover:shadow-md">
                <div class="rounded-full bg-primary/10 p-3">
                  <LucideChartArea class="h-6 w-6 text-primary" />
                </div>
                <h3 class="text-xl font-bold">Business Advisory</h3>
                <p class="text-center text-slate-700">
                  Expert advice on financial decisions, business growth strategies, and operational efficiency.
                </p>
              </div>
            </div>
          </div>
        </section>

        
        <section id="about" class="w-full py-12 md:py-24 lg:py-32 bg-slate-50">
          <div class="container mx-auto px-4 md:px-6">
            <div class="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div class="flex items-center justify-center">
                <img
                  src="https://placehold.co/550x550"
                  alt="Professional Bookkeepers"
                  width="550"
                  height="550"
                  class="rounded-lg object-cover"
                />
              </div>
              <div class="flex flex-col justify-center space-y-4">
                <div class="space-y-2">
                  <div class="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                    Why Choose Us
                  </div>
                  <h2 class="text-3xl font-bold tracking-tighter sm:text-4xl text-primary">
                    Expert Bookkeeping with a Personal Touch
                  </h2>
                  <p class="max-w-[600px] text-slate-700 md:text-xl/relaxed">
                    We combine professional expertise with personalized service to deliver exceptional bookkeeping
                    solutions.
                  </p>
                </div>
                <div class="space-y-4">
                  <div class="flex items-LucideStart gap-4">
                    <LucideCheckCircle class="h-6 w-6 text-primary shrink-0" />
                    <div>
                      <h3 class="font-bold">Certified Professionals</h3>
                      <p class="text-slate-700">
                        Our team consists of certified bookkeepers and accountants with years of experience.
                      </p>
                    </div>
                  </div>
                  <div class="flex items-LucideStart gap-4">
                    <LucideCheckCircle class="h-6 w-6 text-primary shrink-0" />
                    <div>
                      <h3 class="font-bold">Tailored Solutions</h3>
                      <p class="text-slate-700">
                        We customize our services to meet the specific needs of your business.
                      </p>
                    </div>
                  </div>
                  <div class="flex items-LucideStart gap-4">
                    <LucideCheckCircle class="h-6 w-6 text-primary shrink-0" />
                    <div>
                      <h3 class="font-bold">Timely and Accurate</h3>
                      <p class="text-slate-700">
                        We deliver accurate financial information when you need it, ensuring you can make informed
                        decisions.
                      </p>
                    </div>
                  </div>
                  <div class="flex items-LucideStart gap-4">
                    <LucideCheckCircle class="h-6 w-6 text-primary shrink-0" />
                    <div>
                      <h3 class="font-bold">Advanced Technology</h3>
                      <p class="text-slate-700">
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

        
        <section id="testimonials" class="w-full py-12 md:py-24 lg:py-32">
          <div class="container mx-auto px-4 md:px-6">
            <div class="flex flex-col items-center justify-center space-y-4 text-center">
              <div class="space-y-2">
                <div class="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Testimonials</div>
                <h2 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
                  What Our Clients Say
                </h2>
                <p class="max-w-[900px] text-slate-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Don't just take our word for it. Here's what our clients have to say about our services.
                </p>
              </div>
            </div>
            <div class="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div class="flex flex-col justify-between space-y-4 rounded-lg border border-slate-200 p-6 shadow-sm">
                <div class="space-y-2">
                  <div class="flex gap-1 text-amber-400">
                    <LucideStar class="h-5 w-5 fill-current" />
                    <LucideStar class="h-5 w-5 fill-current" />
                    <LucideStar class="h-5 w-5 fill-current" />
                    <LucideStar class="h-5 w-5 fill-current" />
                    <LucideStar class="h-5 w-5 fill-current" />
                  </div>
                  <p class="text-slate-700">
                    "AccuBooks transformed our financial management. Their attention to detail and expert advice have
                    been invaluable to our business growth."
                  </p>
                </div>
                <div class="flex items-center gap-4">
                  <img
                    src="https://placehold.co/40x40"
                    alt="Client"
                    width="40"
                    height="40"
                    class="rounded-full"
                  />
                  <div>
                    <p class="font-medium">Sarah Johnson</p>
                    <p class="text-sm text-slate-600">CEO, Johnson Enterprises</p>
                  </div>
                </div>
              </div>
              <div class="flex flex-col justify-between space-y-4 rounded-lg border border-slate-200 p-6 shadow-sm">
                <div class="space-y-2">
                  <div class="flex gap-1 text-amber-400">
                    <LucideStar class="h-5 w-5 fill-current" />
                    <LucideStar class="h-5 w-5 fill-current" />
                    <LucideStar class="h-5 w-5 fill-current" />
                    <LucideStar class="h-5 w-5 fill-current" />
                    <LucideStar class="h-5 w-5 fill-current" />
                  </div>
                  <p class="text-slate-700">
                    "Working with AccuBooks has been a game-changer for our small business. Their team is responsive,
                    professional, and truly cares about our success."
                  </p>
                </div>
                <div class="flex items-center gap-4">
                  <img
                    src="https://placehold.co/40x40"
                    alt="Client"
                    width="40"
                    height="40"
                    class="rounded-full"
                  />
                  <div>
                    <p class="font-medium">Michael Chen</p>
                    <p class="text-sm text-slate-600">Owner, Chen's Retail</p>
                  </div>
                </div>
              </div>
              <div class="flex flex-col justify-between space-y-4 rounded-lg border border-slate-200 p-6 shadow-sm">
                <div class="space-y-2">
                  <div class="flex gap-1 text-amber-400">
                    <LucideStar class="h-5 w-5 fill-current" />
                    <LucideStar class="h-5 w-5 fill-current" />
                    <LucideStar class="h-5 w-5 fill-current" />
                    <LucideStar class="h-5 w-5 fill-current" />
                    <LucideStar class="h-5 w-5 fill-current" />
                  </div>
                  <p class="text-slate-700">
                    "I've been using AccuBooks for over 5 years now. Their expertise has saved us time, money, and
                    countless headaches with tax preparation."
                  </p>
                </div>
                <div class="flex items-center gap-4">
                  <img
                    src="https://placehold.co/40x40"
                    alt="Client"
                    width="40"
                    height="40"
                    class="rounded-full"
                  />
                  <div>
                    <p class="font-medium">Emily Rodriguez</p>
                    <p class="text-sm text-slate-600">Director, Rodriguez & Associates</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        
        <section class="w-full py-12 md:py-24 lg:py-32 bg-primary text-white">
          <div class="container mx-auto px-4 md:px-6">
            <div class="flex flex-col items-center justify-center space-y-4 text-center">
              <div class="space-y-2">
                <h2 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Transform Your Bookkeeping?
                </h2>
                <p class="max-w-[900px] text-white/90 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Schedule a free consultation with our expert team today and discover how we can help your business
                  thrive.
                </p>
              </div>
              <div class="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" class="bg-white text-primary hover:bg-white/90">
                  Schedule a Consultation
                </Button>
                <Button size="lg" variant="secondary" class="border-white text-white hover:bg-white/10">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>

        
        <section id="contact" class="w-full py-12 md:py-24 lg:py-32">
          <div class="container mx-auto px-4 md:px-6">
            <div class="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div class="flex flex-col justify-center space-y-4">
                <div class="space-y-2">
                  <div class="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Contact Us</div>
                  <h2 class="text-3xl font-bold tracking-tighter sm:text-4xl text-primary">Get in Touch</h2>
                  <p class="max-w-[600px] text-slate-700 md:text-xl/relaxed">
                    Have questions or ready to get LucideStarted? Reach out to our team today.
                  </p>
                </div>
                <div class="space-y-4">
                  <div class="flex items-center gap-4">
                    <LucidePhone class="h-6 w-6 text-primary" />
                    <div>
                      <p class="font-medium">LucidePhone</p>
                      <p class="text-slate-700">(555) 123-4567</p>
                    </div>
                  </div>
                  <div class="flex items-center gap-4">
                    <LucideMail class="h-6 w-6 text-primary" />
                    <div>
                      <p class="font-medium">ELucideMail</p>
                      <p class="text-slate-700">info@accubooks.com</p>
                    </div>
                  </div>
                  <div class="flex items-center gap-4">
                    <LucideCalendar class="h-6 w-6 text-primary" />
                    <div>
                      <p class="font-medium">Hours</p>
                      <p class="text-slate-700">Monday - Friday: 9am - 5pm</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="rounded-lg border border-slate-200 p-6 shadow-sm">
                <form class="space-y-4">
                  <div class="grid gap-4 sm:grid-cols-2">
                    <div class="space-y-2">
                      <label
                        htmlFor="first-name"
                        class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        First name
                      </label>
                      <Input id="first-name" placeholder="Enter your first name" />
                    </div>
                    <div class="space-y-2">
                      <label
                        htmlFor="last-name"
                        class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Last name
                      </label>
                      <Input id="last-name" placeholder="Enter your last name" />
                    </div>
                  </div>
                  <div class="space-y-2">
                    <label
                      htmlFor="eLucideMail"
                      class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      ELucideMail
                    </label>
                    <Input id="eLucideMail" placeholder="Enter your eLucideMail" type="eLucideMail" />
                  </div>
                  <div class="space-y-2">
                    <label
                      htmlFor="LucidePhone"
                      class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      LucidePhone
                    </label>
                    <Input id="LucidePhone" placeholder="Enter your LucidePhone number" type="tel" />
                  </div>
                  <div class="space-y-2">
                    <label
                      htmlFor="message"
                      class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Message
                    </label>
                    <Textarea id="message" placeholder="Enter your message" class="min-h-[120px]" />
                  </div>
                  <Button type="submit" class="w-full">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer class="w-full border-t bg-slate-50 py-6 md:py-12">
        <div class="container mx-auto flex flex-col items-center justify-center gap-4 px-4 md:px-6 md:flex-row md:justify-between">
          <div class="flex items-center gap-2">
            <LucideChartArea class="h-6 w-6 text-primary" />
            <span class="text-xl font-bold">AccuBooks</span>
          </div>
          <nav class="flex gap-4 sm:gap-6">
            <a href="#" class="text-sm font-medium hover:underline underline-offset-4">
              Privacy Policy
            </a>
            <a href="#" class="text-sm font-medium hover:underline underline-offset-4">
              Terms of Service
            </a>
            <a href="#" class="text-sm font-medium hover:underline underline-offset-4">
              Sitemap
            </a>
          </nav>
          <p class="text-sm text-slate-600">© {{new Date().getFullYear()}} AccuBooks. All rights reserved.</p>
        </div>
      </footer>
    </div>
</template>
