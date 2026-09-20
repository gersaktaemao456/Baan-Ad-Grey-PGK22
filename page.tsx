"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  ArrowUpRight,
  Check,
  ChevronDown,
  Clock3,
  Crown,
  Headphones,
  Menu,
  MessageCircle,
  Send,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  X,
  Zap,
} from "lucide-react"

const LINE_URL = "https://lin.ee/sriKYP9"
const TELEGRAM_URL = "https://t.me/topgamevvip_bot"

const navigation = [
  { label: "บริการของเรา", href: "#services" },
  { label: "ทำไมต้องเรา", href: "#why-us" },
  { label: "ขั้นตอนการทำงาน", href: "#process" },
  { label: "คำถามที่พบบ่อย", href: "#faq" },
]

const services = [
  {
    number: "01",
    icon: Users,
    title: "บัญชีในเครื่องใช้ควบคู่",
    description:
      "จัดระบบบัญชีสำหรับการใช้งานควบคู่ให้เป็นระเบียบ ลดความซ้ำซ้อน และช่วยให้ทีมทำงานต่อเนื่องได้อย่างมีประสิทธิภาพ",
    points: ["จัดโครงสร้างการใช้งานให้ชัดเจน", "พร้อมคู่มือเริ่มต้น", "ดูแลและให้คำแนะนำหลังเริ่มใช้งาน"],
  },
  {
    number: "02",
    icon: Target,
    title: "การตลาดสายเทา",
    description:
      "วางแนวทางการตลาดแบบตรงกลุ่ม เน้นการเข้าถึงลูกค้าอย่างมีกลยุทธ์ พร้อมคำแนะนำที่เหมาะกับเป้าหมายของคุณ",
    points: ["วิเคราะห์กลุ่มเป้าหมาย", "วางแผนแนวทางการสื่อสาร", "ปรับแผนตามผลลัพธ์จริง"],
  },
  {
    number: "03",
    icon: Headphones,
    title: "ทีมซัพพอร์ต 24 ชม.",
    description:
      "มีทีมงานคอยช่วยเหลือและตอบคำถามตลอด 24 ชั่วโมง ให้คุณทำงานได้อย่างมั่นใจ ไม่ต้องรอเมื่อเกิดปัญหา",
    points: ["ตอบคำถามรวดเร็ว", "ช่วยตรวจสอบปัญหาเป็นขั้นตอน", "ติดตามงานจนจบเคส"],
  },
]

const processSteps = [
  { number: "01", title: "พูดคุยความต้องการ", description: "เล่าเป้าหมายและรูปแบบงานของคุณให้เราฟัง" },
  { number: "02", title: "วางแผนให้เหมาะสม", description: "ทีมงานช่วยวิเคราะห์และสรุปแนวทางที่เหมาะกับคุณ" },
  { number: "03", title: "เริ่มต้นใช้งาน", description: "รับคำแนะนำพร้อมเริ่มใช้งานอย่างเป็นระบบ" },
  { number: "04", title: "ดูแลต่อเนื่อง", description: "มีทีมซัพพอร์ตคอยดูแลและตอบคำถามตลอด 24 ชั่วโมง" },
]

const faqs = [
  {
    question: "เหมาะกับใคร?",
    answer: "เหมาะสำหรับทั้งผู้เริ่มต้นและผู้ที่มีประสบการณ์แล้ว เราจะช่วยจัดแนวทางให้เหมาะกับเป้าหมายและรูปแบบการทำงานของคุณ",
  },
  {
    question: "ต้องมีประสบการณ์มาก่อนไหม?",
    answer: "ไม่จำเป็น เรามีคู่มือและทีมงานคอยอธิบายตั้งแต่พื้นฐานจนถึงการใช้งานจริง",
  },
  {
    question: "ทีมซัพพอร์ตติดต่อได้ช่วงไหน?",
    answer: "ทีมงานพร้อมให้บริการตลอด 24 ชั่วโมง เพื่อให้คุณได้รับความช่วยเหลือเมื่อจำเป็น",
  },
]

export default function Page() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main className="min-h-screen overflow-hidden bg-[#070707] text-[#f7f1e5] selection:bg-[#c99736] selection:text-black">
      <nav
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
          scrolled ? "border-b border-[#c99736]/20 bg-[#070707]/90 backdrop-blur-xl" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-8">
          <a href="#top" className="flex items-center gap-3" aria-label="Baan Ad Grey PGK หน้าหลัก">
            <img
              src="/Baan_Ad_Grey_PGK_logo.png"
              alt="Baan Ad Grey PGK"
              className="h-12 w-12 object-contain"
            />
            <div className="hidden leading-none sm:block">
              <span className="block text-[11px] font-medium uppercase tracking-[0.28em] text-[#c99736]">Baan Ad</span>
              <span className="mt-1 block text-sm font-bold tracking-[0.08em] text-white">GREY PGK</span>
            </div>
          </a>

          <div className="hidden items-center gap-8 lg:flex">
            {navigation.map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-[#b8b0a3] transition-colors hover:text-[#d6a744]">
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-3 sm:flex">
            <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-[#c8c0b4] transition-colors hover:text-[#d6a744]">Telegram</a>
            <Button asChild className="h-10 rounded-full border border-[#f0c45c] bg-[#d6a744] px-5 text-sm font-bold text-black shadow-[0_0_24px_rgba(214,167,68,0.18)] hover:bg-[#f0c45c]">
              <a href={LINE_URL} target="_blank" rel="noopener noreferrer">เริ่มต้นวันนี้ <ArrowUpRight className="ml-1.5 h-4 w-4" /></a>
            </Button>
          </div>

          <button
            type="button"
            className="rounded-lg border border-[#c99736]/30 p-2 text-[#d6a744] sm:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="เปิดเมนู"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="border-t border-[#c99736]/20 bg-[#0b0b0b] px-5 py-4 sm:hidden">
            <div className="space-y-1">
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block rounded-lg px-3 py-3 text-sm text-[#c8c0b4] hover:bg-[#c99736]/10 hover:text-[#d6a744]"
                >
                  {item.label}
                </a>
              ))}
            </div>
            <div className="mt-3 flex flex-col gap-2">
              <Button asChild className="w-full bg-[#d6a744] font-bold text-black hover:bg-[#f0c45c]">
                <a href={LINE_URL} target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)}>
                  <MessageCircle className="mr-2 h-4 w-4" /> เริ่มต้นวันนี้ (Line)
                </a>
              </Button>
              <Button asChild variant="outline" className="w-full border-[#c99736]/40 bg-transparent text-[#e2d6c3] hover:bg-[#d6a744]/10 hover:text-[#f5d477]">
                <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)}>
                  <Send className="mr-2 h-4 w-4" /> Telegram
                </a>
              </Button>
            </div>
          </div>
        )}
      </nav>

      <section id="top" className="relative isolate border-b border-[#c99736]/15 pt-32 sm:pt-40">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_12%,rgba(207,156,47,0.15),transparent_30%),radial-gradient(circle_at_0%_48%,rgba(207,156,47,0.07),transparent_26%)]" />
        <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-[#d6a744]/70 to-transparent" />
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 pb-24 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20 lg:pb-32">
          <div className="text-center lg:text-left">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#d6a744]/35 bg-[#d6a744]/[0.07] px-4 py-2 text-xs font-medium tracking-wide text-[#e5bb5d]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#e6b94d] shadow-[0_0_12px_#e6b94d]" />
              บ้านแอดเทา PGK — ครบ จบ ในที่เดียว
            </div>
            <h1 className="text-balance text-5xl font-bold leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-7xl">
              วางระบบให้พร้อม
              <br />
              <span className="bg-gradient-to-r from-[#f5d477] via-[#d6a744] to-[#a76c14] bg-clip-text text-transparent">เติบโตไปด้วยกัน</span>
            </h1>
            <p className="mx-auto mt-7 max-w-xl text-base leading-8 text-[#aaa296] sm:text-lg lg:mx-0">
              บริการครบวงจรสำหรับคนทำงานยุคใหม่ ตั้งแต่บัญชีในเครื่องใช้ควบคู่ การตลาดสายเทา ไปจนถึงทีมซัพพอร์ตที่พร้อมดูแลคุณตลอด 24 ชั่วโมง
            </p>
            <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row lg:justify-start">
              <Button asChild size="lg" className="group h-13 rounded-full border border-[#f0c45c] bg-[#d6a744] px-7 font-bold text-black shadow-[0_12px_40px_rgba(214,167,68,0.2)] hover:bg-[#f0c45c]">
                <a href={LINE_URL} target="_blank" rel="noopener noreferrer">ปรึกษาเราเลย <ArrowUpRight className="ml-2 h-5 w-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></a>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-13 rounded-full border-[#c99736]/35 bg-transparent px-7 text-[#e2d6c3] hover:border-[#d6a744] hover:bg-[#d6a744]/10 hover:text-[#f5d477]">
                <a href="#services">ดูบริการของเรา</a>
              </Button>
            </div>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs text-[#8f887e] lg:justify-start">
              <span className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-[#d6a744]" /> ทำงานเป็นระบบ</span>
              <span className="flex items-center gap-2"><Clock3 className="h-4 w-4 text-[#d6a744]" /> ซัพพอร์ต 24 ชม.</span>
              <span className="flex items-center gap-2"><Zap className="h-4 w-4 text-[#d6a744]" /> เริ่มงานไว</span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[520px] lg:mx-0 lg:justify-self-end">
            <div className="absolute -inset-8 rounded-full bg-[#c99736]/10 blur-3xl" />
            <div className="relative rounded-[2rem] border border-[#d6a744]/35 bg-[#0d0d0d] p-3 shadow-[0_24px_100px_rgba(0,0,0,0.7)]">
              <div className="overflow-hidden rounded-[1.5rem] border border-[#c99736]/20 bg-black">
                <img src="/Baan_Ad_Grey_PGK_logo.png" alt="โลโก้ Baan Ad Grey PGK" className="mx-auto h-auto w-full object-contain" />
              </div>
              <div className="grid grid-cols-3 divide-x divide-[#c99736]/20 px-2 py-5 text-center">
                <div><p className="text-xl font-bold text-[#e4b653]">24/7</p><p className="mt-1 text-[10px] text-[#8f887e]">ทีมดูแล</p></div>
                <div><p className="text-xl font-bold text-[#e4b653]">ครบ</p><p className="mt-1 text-[10px] text-[#8f887e]">ในที่เดียว</p></div>
                <div><p className="text-xl font-bold text-[#e4b653]">PGK</p><p className="mt-1 text-[10px] text-[#8f887e]">มาตรฐานเรา</p></div>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-3 px-5 pb-8 text-[10px] uppercase tracking-[0.35em] text-[#6f685f] sm:px-8"><span className="h-px w-12 bg-[#c99736]/40" /> Baan Ad Grey PGK <span className="h-px w-12 bg-[#c99736]/40" /></div>
      </section>

      <section id="services" className="relative py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mb-14 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#d6a744]">Our services</p>
              <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">บริการของเรา</h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-[#9b9388] sm:text-right">ตั้งแต่เริ่มต้นจนทำงานได้จริง เราพร้อมดูแลทุกขั้นตอนด้วยทีมงานที่เข้าใจการทำงานของคุณ</p>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <Card key={service.number} className="group relative overflow-hidden border-[#c99736]/20 bg-[#0d0d0d] transition-all duration-300 hover:-translate-y-2 hover:border-[#d6a744]/60 hover:shadow-[0_20px_60px_rgba(190,139,38,0.1)]">
                  <div className="absolute right-5 top-5 text-5xl font-bold text-[#d6a744]/10 transition-colors group-hover:text-[#d6a744]/20">{service.number}</div>
                  <CardHeader className="relative pb-3">
                    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl border border-[#d6a744]/30 bg-[#d6a744]/10 text-[#e2b64d] transition-transform group-hover:scale-110"><Icon className="h-6 w-6" /></div>
                    <CardTitle className="text-2xl text-white">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="relative">
                    <p className="text-sm leading-7 text-[#aaa296]">{service.description}</p>
                    <ul className="mt-7 space-y-3 border-t border-[#c99736]/15 pt-6">
                      {service.points.map((point) => <li key={point} className="flex items-center gap-3 text-sm text-[#d1c8ba]"><span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#d6a744]/15"><Check className="h-3 w-3 text-[#d6a744]" /></span>{point}</li>)}
                    </ul>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      <section id="why-us" className="border-y border-[#c99736]/15 bg-[#0b0b0b] py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#d6a744]">Why Baan Ad Grey PGK</p>
            <h2 className="mt-4 text-4xl font-bold leading-tight text-white sm:text-5xl">มากกว่าแค่บริการ<br /><span className="text-[#d6a744]">คือทีมที่อยู่ข้างคุณ</span></h2>
            <p className="mt-6 max-w-md text-sm leading-8 text-[#aaa296]">เราเชื่อว่าระบบที่ดีต้องใช้งานได้จริง เข้าใจง่าย และมีคนคอยดูแลเมื่อคุณต้องการความช่วยเหลือ</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild className="rounded-full bg-[#d6a744] font-bold text-black hover:bg-[#f0c45c]">
                <a href={LINE_URL} target="_blank" rel="noopener noreferrer"><MessageCircle className="mr-2 h-4 w-4" /> คุยผ่าน Line <ArrowUpRight className="ml-2 h-4 w-4" /></a>
              </Button>
              <Button asChild variant="outline" className="rounded-full border-[#c99736]/40 bg-transparent text-[#e2d6c3] hover:bg-[#d6a744]/10 hover:text-[#f5d477]">
                <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer"><Send className="mr-2 h-4 w-4" /> Telegram</a>
              </Button>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { icon: Crown, title: "ประสบการณ์ที่เข้าใจจริง", text: "ให้คำแนะนำจากการทำงานจริง ไม่ใช่แค่ทฤษฎี" },
              { icon: Zap, title: "ทำงานไว เป็นขั้นตอน", text: "ลดเวลาลองผิดลองถูก พร้อมเริ่มงานได้อย่างมั่นใจ" },
              { icon: MessageCircle, title: "สื่อสารตรงไปตรงมา", text: "คุยง่าย ให้ข้อมูลชัดเจน และติดตามงานสม่ำเสมอ" },
              { icon: ShieldCheck, title: "ดูแลคุณต่อเนื่อง", text: "ไม่ทิ้งคุณไว้กลางทาง มีทีมงานคอยซัพพอร์ต 24 ชั่วโมง" },
            ].map((item) => {
              const Icon = item.icon
              return <div key={item.title} className="rounded-2xl border border-[#c99736]/15 bg-[#101010] p-6 transition-colors hover:border-[#d6a744]/45"><Icon className="h-6 w-6 text-[#d6a744]" /><h3 className="mt-5 text-lg font-bold text-white">{item.title}</h3><p className="mt-2 text-sm leading-7 text-[#969087]">{item.text}</p></div>
            })}
          </div>
        </div>
      </section>

      <section id="process" className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mx-auto max-w-2xl text-center"><p className="text-xs font-bold uppercase tracking-[0.28em] text-[#d6a744]">How it works</p><h2 className="mt-4 text-4xl font-bold text-white sm:text-5xl">เริ่มต้นง่าย เพียง 4 ขั้นตอน</h2><p className="mt-5 text-sm leading-7 text-[#9b9388]">ไม่ว่าคุณจะเริ่มจากศูนย์หรือมีประสบการณ์แล้ว เราช่วยให้ทุกอย่างชัดเจนขึ้น</p></div>
          <div className="relative mt-16 grid gap-8 md:grid-cols-4">
            <div className="absolute left-[12%] right-[12%] top-7 hidden h-px bg-gradient-to-r from-transparent via-[#c99736]/40 to-transparent md:block" />
            {processSteps.map((step) => <div key={step.number} className="relative text-center"><div className="relative mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-[#d6a744] bg-[#0d0d0d] text-lg font-bold text-[#d6a744] shadow-[0_0_28px_rgba(214,167,68,0.12)]">{step.number}</div><h3 className="mt-6 text-base font-bold text-white">{step.title}</h3><p className="mx-auto mt-2 max-w-[200px] text-sm leading-6 text-[#969087]">{step.description}</p></div>)}
          </div>
        </div>
      </section>

      <section id="faq" className="border-t border-[#c99736]/15 bg-[#0b0b0b] py-24 sm:py-32">
        <div className="mx-auto grid max-w-5xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.7fr_1.3fr]">
          <div><p className="text-xs font-bold uppercase tracking-[0.28em] text-[#d6a744]">FAQ</p><h2 className="mt-4 text-4xl font-bold text-white">คำถามที่พบบ่อย</h2><p className="mt-5 text-sm leading-7 text-[#969087]">มีข้อสงสัยเพิ่มเติม ทักหาเราได้ตลอด ทีมงานพร้อมตอบทุกคำถาม</p></div>
          <div className="space-y-3">{faqs.map((faq, index) => { const isOpen = openFaq === index; return <div key={faq.question} className="rounded-xl border border-[#c99736]/20 bg-[#101010]"><button type="button" onClick={() => setOpenFaq(isOpen ? null : index)} className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left text-sm font-bold text-white"><span>{faq.question}</span><ChevronDown className={`h-5 w-5 flex-shrink-0 text-[#d6a744] transition-transform ${isOpen ? "rotate-180" : ""}`} /></button>{isOpen && <p className="px-5 pb-5 text-sm leading-7 text-[#9f978b]">{faq.answer}</p>}</div> })}</div>
        </div>
      </section>

      <section id="contact" className="relative overflow-hidden py-24 sm:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(207,156,47,0.14),transparent_50%)]" />
        <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-[#d6a744]/40 bg-[#d6a744]/10 text-[#e5bb5d]"><Sparkles className="h-7 w-7" /></div>
          <h2 className="mt-7 text-4xl font-bold tracking-tight text-white sm:text-6xl">พร้อมเริ่มต้นแล้วหรือยัง?</h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-[#a69e92]">ให้ Baan Ad Grey PGK ช่วยวางระบบและดูแลคุณตั้งแต่วันนี้ เราพร้อมคุยและช่วยหาทางที่เหมาะกับคุณ</p>
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="h-14 rounded-full border border-[#f0c45c] bg-[#d6a744] px-8 font-bold text-black shadow-[0_12px_40px_rgba(214,167,68,0.22)] hover:bg-[#f0c45c]">
              <a href={LINE_URL} target="_blank" rel="noopener noreferrer"><MessageCircle className="mr-2 h-5 w-5" /> ติดต่อผ่าน Line <ArrowUpRight className="ml-2 h-5 w-5" /></a>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-14 rounded-full border-[#c99736]/40 bg-transparent px-8 text-[#e2d6c3] hover:border-[#d6a744] hover:bg-[#d6a744]/10 hover:text-[#f5d477]">
              <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer"><Send className="mr-2 h-5 w-5" /> ติดต่อผ่าน Telegram</a>
            </Button>
          </div>
          <p className="mt-6 text-xs text-[#777066]">ทีมงานพร้อมตอบกลับและให้คำแนะนำเบื้องต้น ทั้ง Line และ Telegram</p>
        </div>
      </section>

      <footer className="border-t border-[#c99736]/15 bg-[#050505] py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-5 sm:flex-row sm:px-8"><a href="#top" className="flex items-center gap-3"><img src="/Baan_Ad_Grey_PGK_logo.png" alt="Baan Ad Grey PGK" className="h-10 w-10 object-contain" /><div><p className="text-sm font-bold text-white">Baan Ad Grey PGK</p><p className="mt-1 text-[10px] tracking-widest text-[#8d8478]">ครบ จบ ในที่เดียว</p></div></a><p className="text-xs text-[#777066]">© {new Date().getFullYear()} Baan Ad Grey PGK. All rights reserved.</p><div className="flex items-center gap-5">
              <a href={LINE_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-[#d6a744] transition-colors hover:text-[#f5d477]"><MessageCircle className="h-4 w-4" /> Line</a>
              <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-[#d6a744] transition-colors hover:text-[#f5d477]"><Send className="h-4 w-4" /> Telegram</a>
            </div></div>
      </footer>
    </main>
  )
}
