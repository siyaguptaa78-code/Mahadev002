'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Reveal from '../../components/UI/Reveal';
import { HelpCircle, Plus, Minus, Calendar, Clock, Trophy, ArrowRight } from 'lucide-react';

const faqs = [
  {
    q: "Who has scored the most runs in IPL history?",
    a: "Virat Kohli — 9,261 runs, all for RCB, nearly 2,000 more than anyone else."
  },
  {
    q: "Who scored the most runs in IPL 2026?",
    a: "Vaibhav Sooryavanshi of Rajasthan Royals — 776 runs, the most in the 2026 season."
  },
  {
    q: "What is the record for most runs in one IPL season?",
    a: "Virat Kohli's 973 runs in 2016. No player has come within 80 runs of it since."
  },
  {
    q: "How many centuries does Kohli have in the IPL?",
    a: "Nine — the most of any player — plus 67 fifties."
  },
  {
    q: "Who is the highest run-scorer among retired players?",
    a: "Shikhar Dhawan, with 6,769 runs, is third on the all-time list."
  }
];

export default function MostRunsInIplPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const whatsappUrl = "https://wa.me/916026703858";

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <div className="min-h-screen bg-black py-16">
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb / Back Link */}
        <div className="mb-8">
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-1.5 text-zinc-400 hover:text-amber-500 text-sm font-semibold transition-colors group"
          >
            <ArrowRight className="w-4 h-4 rotate-180 group-hover:-translate-x-0.5 transition-transform" />
            Back to Insights
          </Link>
        </div>

        {/* Article Header */}
        <Reveal>
          <div className="space-y-4 mb-8 pb-8 border-b border-zinc-900">
            <div className="flex items-center gap-3">
              <span className="text-xs font-semibold text-amber-500 uppercase tracking-wider bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full">
                IPL Stats
              </span>
              <span className="text-2xl">🏏</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black text-white leading-tight">
              Most Runs in IPL History
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-zinc-500 text-xs pt-2">
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                <span>July 14, 2026</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                <span>5 min read</span>
              </div>
              <div className="text-zinc-600">By Mahadev Book Analyst</div>
            </div>
          </div>
        </Reveal>

        {/* Jump To Navigation */}
        <Reveal>
          <div className="bg-zinc-950/80 border border-zinc-900 rounded-xl p-4 mb-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-zinc-450">
            <span className="font-semibold text-zinc-300">Jump to:</span>
            <a href="#all-time-top-scorers" className="hover:text-amber-400 transition-colors underline decoration-dotted decoration-zinc-700 hover:decoration-amber-500">All-Time Top Scorers</a>
            <span className="text-zinc-800">|</span>
            <a href="#the-kohli-chasm" className="hover:text-amber-400 transition-colors underline decoration-dotted decoration-zinc-700 hover:decoration-amber-500">The Kohli Chasm</a>
            <span className="text-zinc-800">|</span>
            <a href="#single-season-records" className="hover:text-amber-400 transition-colors underline decoration-dotted decoration-zinc-700 hover:decoration-amber-500">Single-Season Records</a>
            <span className="text-zinc-800">|</span>
            <a href="#faqs" className="hover:text-amber-400 transition-colors underline decoration-dotted decoration-zinc-700 hover:decoration-amber-500">FAQs</a>
          </div>
        </Reveal>

        {/* Article Body */}
        <div className="prose prose-invert max-w-none prose-amber prose-headings:font-serif prose-headings:font-bold prose-headings:text-white prose-p:text-zinc-300 prose-p:leading-relaxed prose-p:font-light prose-p:mb-6 prose-a:text-amber-400 hover:prose-a:text-amber-300">
          <Reveal>
            <p className="text-lg text-zinc-200 leading-relaxed font-light">
              There's a list. There's a chasm. And then there's the rest. Virat Kohli's 9,261 runs in the IPL, nearly two thousand more than anyone else, and all for one team, over nineteen seasons, with which he has won the tournament in consecutive years in 2025 and 2026. Whatever the arguments in other formats, the IPL run-scoring race has one name at the top.
            </p>
          </Reveal>

          {/* Section: All-Time Top Scorers */}
          <section id="all-time-top-scorers" className="pt-10 scroll-mt-20">
            <Reveal>
              <h2 className="text-2xl font-serif font-bold text-white mb-4">All-Time Top Run-Scorers</h2>
              <p className="text-zinc-400 text-sm font-light mb-6">As of the end of IPL 2026:</p>
            </Reveal>

            <Reveal>
              <div className="overflow-x-auto my-6 border border-zinc-850 rounded-xl bg-zinc-950/40 backdrop-blur-sm">
                <table className="min-w-full divide-y divide-zinc-800 text-left text-sm text-zinc-300">
                  <thead className="bg-zinc-950 text-white font-serif uppercase tracking-wider text-xs">
                    <tr>
                      <th className="px-6 py-4 font-bold border-b border-zinc-850 text-amber-500 w-20">Rank</th>
                      <th className="px-6 py-4 font-semibold border-b border-zinc-850">Player</th>
                      <th className="px-6 py-4 font-semibold border-b border-zinc-850 text-right pr-12">Runs</th>
                      <th className="px-6 py-4 font-semibold border-b border-zinc-850">Notes</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-900 bg-black/40">
                    <tr className="hover:bg-zinc-900/30 transition-colors">
                      <td className="px-6 py-4 font-bold text-amber-400">1</td>
                      <td className="px-6 py-4 font-semibold text-white">Virat Kohli (RCB)</td>
                      <td className="px-6 py-4 font-bold text-amber-400 text-right pr-12">9,261</td>
                      <td className="px-6 py-4 text-zinc-400 font-light">283+ matches, 9 hundreds, 67 fifties</td>
                    </tr>
                    <tr className="hover:bg-zinc-900/30 transition-colors">
                      <td className="px-6 py-4 font-bold text-amber-400">2</td>
                      <td className="px-6 py-4 font-semibold text-white">Rohit Sharma (MI)</td>
                      <td className="px-6 py-4 font-bold text-amber-400 text-right pr-12">7,329</td>
                      <td className="px-6 py-4 text-zinc-400 font-light">281 matches</td>
                    </tr>
                    <tr className="hover:bg-zinc-900/30 transition-colors">
                      <td className="px-6 py-4 font-bold text-amber-400">3</td>
                      <td className="px-6 py-4 font-semibold text-white">Shikhar Dhawan (PBKS)</td>
                      <td className="px-6 py-4 font-bold text-amber-400 text-right pr-12">6,769</td>
                      <td className="px-6 py-4 text-zinc-400 font-light">222 matches — retired</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Reveal>

            <Reveal>
              <p className="text-zinc-400 leading-relaxed font-light mt-4">
                The chasing pack, in which David Warner, KL Rahul, Suryakumar Yadav, and the rest are shuffled year in, year out, is found in full detail here after every season. What isn't shuffled is the podium.
              </p>
            </Reveal>
          </section>

          {/* Section: The Kohli Chasm */}
          <section id="the-kohli-chasm" className="pt-12 scroll-mt-20">
            <Reveal>
              <h2 className="text-2xl font-serif font-bold text-white mb-4">The Kohli Chasm</h2>
            </Reveal>
            
            <Reveal>
              <p className="text-zinc-300 leading-relaxed font-light mb-6">
                The second-placed Rohit Sharma trails Kohli by 1,932 runs, a lead of nearly four full seasons. Kohli's lead is a combination of freakish longevity (he is the only player to have batted in all IPL seasons for a single franchise) and one ridiculous season: 973 runs in 2016. Kohli has two Orange Caps to his name, ten years apart, which no other player has ever achieved. A full list is on our <Link href="/ipl-orange-cap-purple-cap-winners/" className="text-amber-400 hover:text-amber-300 underline font-medium transition-colors">Orange Cap winners page</Link>.
              </p>
              <p className="text-zinc-300 leading-relaxed font-light mb-6">
                Rohit Sharma, second on the list with 7,329 runs, has played for two franchises in his IPL career, and has five <Link href="/ipl-winners-list/" className="text-amber-400 hover:text-amber-300 underline font-medium transition-colors">IPL titles</Link> as a captain. Shikhar Dhawan, with 6,769 runs, trails closely behind in third. He doesn't have an Orange Cap to his name, but has played 222 matches' worth of solid opening batting.
              </p>
            </Reveal>
          </section>

          {/* Section: Single-Season Records */}
          <section id="single-season-records" className="pt-12 scroll-mt-20">
            <Reveal>
              <h2 className="text-2xl font-serif font-bold text-white mb-4">Most Runs in a Single IPL Season</h2>
            </Reveal>

            <Reveal>
              <div className="overflow-x-auto my-6 border border-zinc-850 rounded-xl bg-zinc-950/40 backdrop-blur-sm">
                <table className="min-w-full divide-y divide-zinc-800 text-left text-sm text-zinc-300">
                  <thead className="bg-zinc-950 text-white font-serif uppercase tracking-wider text-xs">
                    <tr>
                      <th className="px-6 py-4 font-semibold border-b border-zinc-850">Player</th>
                      <th className="px-6 py-4 font-semibold border-b border-zinc-850 text-right pr-16">Runs</th>
                      <th className="px-6 py-4 font-semibold border-b border-zinc-850 text-amber-500">Season</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-900 bg-black/40">
                    <tr className="hover:bg-zinc-900/30 transition-colors">
                      <td className="px-6 py-4 font-semibold text-white">Virat Kohli</td>
                      <td className="px-6 py-4 font-bold text-amber-400 text-right pr-16">973</td>
                      <td className="px-6 py-4 text-zinc-400 font-light">2016</td>
                    </tr>
                    <tr className="hover:bg-zinc-900/30 transition-colors">
                      <td className="px-6 py-4 font-semibold text-white">Shubman Gill</td>
                      <td className="px-6 py-4 font-bold text-amber-400 text-right pr-16">890</td>
                      <td className="px-6 py-4 text-zinc-400 font-light">2023</td>
                    </tr>
                    <tr className="hover:bg-zinc-900/30 transition-colors">
                      <td className="px-6 py-4 font-semibold text-white">Jos Buttler</td>
                      <td className="px-6 py-4 font-bold text-amber-400 text-right pr-16">863</td>
                      <td className="px-6 py-4 text-zinc-400 font-light">2022</td>
                    </tr>
                    <tr className="hover:bg-zinc-900/30 transition-colors">
                      <td className="px-6 py-4 font-semibold text-white">Vaibhav Sooryavanshi</td>
                      <td className="px-6 py-4 font-bold text-amber-400 text-right pr-16">776</td>
                      <td className="px-6 py-4 text-zinc-400 font-light">2026</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Reveal>

            <Reveal>
              <p className="text-zinc-300 leading-relaxed font-light mt-4">
                Kohli's 973 has stood the test of time, even as the IPL's batting averages have risen, impact players have entered the fray, and total team scores have regularly breached 250. The record was threatened in 2026, when teenager Vaibhav Sooryavanshi of Rajasthan Royals scored 776 runs to win the <Link href="/ipl-orange-cap-purple-cap-winners/" className="text-amber-400 hover:text-amber-300 underline font-medium transition-colors">Orange Cap</Link> in his debut season. He has another fifteen years or so to catch Kohli.
              </p>
            </Reveal>
          </section>

          {/* Section: FAQs */}
          <section id="faqs" className="pt-16 pb-8 border-t border-zinc-900 scroll-mt-20">
            <Reveal>
              <div className="text-center mb-10">
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-2">
                  Most Runs in IPL: FAQs
                </h2>
                <div className="w-12 h-0.5 bg-amber-500 mx-auto rounded-full mt-2"></div>
              </div>
            </Reveal>

            <div className="space-y-4">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <Reveal key={index} yOffset={20} delay={index * 0.05}>
                    <div className="glass-card rounded-xl border border-zinc-850 overflow-hidden transition-all duration-300">
                      <button
                        onClick={() => toggleFaq(index)}
                        className="w-full px-6 py-4 flex items-center justify-between text-left text-white hover:text-amber-400 transition-colors"
                      >
                        <span className="font-semibold text-sm sm:text-base font-serif flex items-center gap-2">
                          <HelpCircle className="w-4.5 h-4.5 text-amber-500 flex-shrink-0" />
                          {faq.q}
                        </span>
                        {isOpen ? <Minus className="w-4.5 h-4.5 text-amber-500" /> : <Plus className="w-4.5 h-4.5 text-amber-500" />}
                      </button>
                      {isOpen && (
                        <div className="px-6 pb-5 pt-1 text-zinc-400 text-sm font-light leading-relaxed border-t border-zinc-900 bg-zinc-950/20">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </section>

          {/* Footer Metadata */}
          <Reveal>
            <div className="mt-12 pt-6 border-t border-zinc-900 text-xs text-zinc-550 italic leading-relaxed text-center">
              Last updated: 14 July 2026 — figures per ESPNcricinfo/official IPL records after IPL 2026. Updated every season.
            </div>
          </Reveal>
        </div>

        {/* CTA Box */}
        <Reveal>
          <div className="mt-16 p-8 rounded-2xl glass-card border border-amber-500/10 text-center space-y-4">
            <h3 className="text-xl font-serif font-bold text-white">Want to put these insights into action?</h3>
            <p className="text-zinc-400 text-sm font-light max-w-md mx-auto">
              Get your verified Mahadev Book ID on WhatsApp in under 5 minutes and start placing smart bets now.
            </p>
            <div className="pt-2">
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 text-black font-extrabold px-6 py-3 rounded-xl hover:brightness-110 transition-all duration-300 shadow-md shadow-amber-500/10"
              >
                Get Your ID Now
              </a>
            </div>
          </div>
        </Reveal>

      </div>
    </div>
  );
}
