import React, { useState } from 'react';
import { FileDown, CheckCircle, TrendingUp, Users, Target, Clock, DollarSign } from 'lucide-react';

const RedditSEOPlaybook = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 12;

  const generatePDF = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 p-8">
      {/* Print Button */}
      <div className="max-w-4xl mx-auto mb-6 print:hidden">
        <button
          onClick={generatePDF}
          className="flex items-center gap-2 bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors shadow-lg"
        >
          <FileDown size={20} />
          Download as PDF
        </button>
        <p className="mt-2 text-sm text-gray-600">
          Click to open print dialog, then save as PDF
        </p>
      </div>

      {/* PDF Content */}
      <div className="max-w-4xl mx-auto bg-white shadow-2xl print:shadow-none">
        
        {/* Cover Page */}
        <div className="p-12 bg-gradient-to-br from-orange-600 to-red-600 text-white min-h-screen flex flex-col justify-center page-break">
          <div className="text-6xl font-bold mb-4">📊</div>
          <h1 className="text-5xl font-bold mb-6 leading-tight">
            The Reddit SEO Playbook
          </h1>
          <p className="text-2xl mb-8 opacity-90">
            How to Rank Your Business on Google Using Reddit in 30 Days
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold mb-4">Why This Matters Now:</h3>
            <div className="text-3xl font-bold mb-2">1,328% Increase</div>
            <p className="text-lg">
              Reddit's visibility on Google from July 2023 to April 2024
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <Clock className="mx-auto mb-2" size={24} />
              <div className="font-semibold">Build Time</div>
              <div className="text-sm opacity-90">3-4 hours</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <DollarSign className="mx-auto mb-2" size={24} />
              <div className="font-semibold">Cost</div>
              <div className="text-sm opacity-90">$0</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <Target className="mx-auto mb-2" size={24} />
              <div className="font-semibold">ROI Potential</div>
              <div className="text-sm opacity-90">Very High</div>
            </div>
          </div>
        </div>

        {/* Page 2: Stats Overview */}
        <div className="p-12 min-h-screen page-break">
          <h2 className="text-4xl font-bold text-gray-800 mb-8 border-b-4 border-orange-600 pb-4">
            Your Content Performance Snapshot
          </h2>
          
          <div className="mb-8 bg-orange-50 border-l-4 border-orange-600 p-6 rounded-r-lg">
            <p className="text-lg text-gray-700 leading-relaxed">
              Before we dive into the Reddit SEO strategy, let's look at how your content performed across different platforms. Notice anything interesting?
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 mb-8">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 text-white p-6 rounded-lg">
              <div className="text-sm opacity-75 mb-2">Twitter/X</div>
              <div className="text-4xl font-bold mb-2">79</div>
              <div className="text-sm">views</div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white p-6 rounded-lg">
              <div className="text-sm opacity-75 mb-2">LinkedIn</div>
              <div className="text-4xl font-bold mb-2">65</div>
              <div className="text-sm">views</div>
            </div>
            
            <div className="bg-gradient-to-br from-pink-600 to-purple-600 text-white p-6 rounded-lg">
              <div className="text-sm opacity-75 mb-2">Instagram</div>
              <div className="text-4xl font-bold mb-2">12</div>
              <div className="text-sm">views</div>
            </div>
            
            <div className="bg-gradient-to-br from-black to-gray-900 text-white p-6 rounded-lg">
              <div className="text-sm opacity-75 mb-2">TikTok</div>
              <div className="text-4xl font-bold mb-2">203</div>
              <div className="text-sm">views</div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-lg">
              <div className="text-sm opacity-75 mb-2">Facebook</div>
              <div className="text-4xl font-bold mb-2">260</div>
              <div className="text-sm">views</div>
            </div>
            
            <div className="bg-gradient-to-br from-orange-600 to-red-600 text-white p-6 rounded-lg shadow-xl transform scale-105">
              <TrendingUp className="mb-2" size={24} />
              <div className="text-sm opacity-75 mb-2">Reddit</div>
              <div className="text-5xl font-bold mb-2">1,700</div>
              <div className="text-sm">views 🚀</div>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
            <h3 className="font-bold text-xl mb-3 text-yellow-800">
              📈 The Reddit Advantage
            </h3>
            <p className="text-gray-700 text-lg">
              Reddit outperformed all other platforms combined by <strong>2.6x</strong>. While competitors focus on traditional social media, savvy businesses are dominating search results through Reddit.
            </p>
          </div>
        </div>

        {/* Page 3: Why Reddit SEO Matters */}
        <div className="p-12 min-h-screen page-break">
          <h2 className="text-4xl font-bold text-gray-800 mb-8 border-b-4 border-orange-600 pb-4">
            Why Reddit SEO Is The Opportunity of 2024-2025
          </h2>
          
          <div className="space-y-6">
            <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-lg">
              <h3 className="font-bold text-xl mb-3 text-red-800">
                🚨 The Problem You're Facing
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Your competitors are already ranking on Google's first page for "{'{'}your industry{'}'} + reddit" searches. When potential customers search for recommendations, they're finding your competitors' Reddit posts, not your website.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-1">•</span>
                  <span>Traditional SEO takes 6-12 months to show results</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-1">•</span>
                  <span>Paid ads are getting more expensive every quarter</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-1">•</span>
                  <span>Social media organic reach continues to decline</span>
                </li>
              </ul>
            </div>

            <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-lg">
              <h3 className="font-bold text-xl mb-3 text-green-800">
                ✅ The Reddit SEO Solution
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Google now prioritizes Reddit content in search results. A well-crafted Reddit post can rank on page 1 within days, not months.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                  <span><strong>Fast results:</strong> Rank within 7-30 days</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                  <span><strong>Zero cost:</strong> Completely free organic traffic</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                  <span><strong>High intent traffic:</strong> People actively seeking recommendations</span>
                </li>
              </ul>
            </div>

            <div className="bg-orange-50 border-l-4 border-orange-600 p-6 rounded-r-lg">
              <h3 className="font-bold text-xl mb-3 text-orange-800">
                📊 By The Numbers
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-white rounded-lg shadow">
                  <div className="text-3xl font-bold text-orange-600 mb-2">1,328%</div>
                  <div className="text-sm text-gray-600">Google visibility increase</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow">
                  <div className="text-3xl font-bold text-orange-600 mb-2">850M+</div>
                  <div className="text-sm text-gray-600">Monthly active users</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Page 4: 5 Reddit Communities */}
        <div className="p-12 min-h-screen page-break">
          <h2 className="text-4xl font-bold text-gray-800 mb-8 border-b-4 border-orange-600 pb-4">
            The 5 Reddit Communities Every Business Must Join
          </h2>
          
          <div className="mb-6 bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
            <p className="text-gray-700">
              <strong>Strategy:</strong> Focus on communities where your ideal customers are actively seeking recommendations and solutions.
            </p>
          </div>

          <div className="space-y-6">
            <div className="border-2 border-gray-200 rounded-lg p-6 hover:border-orange-600 transition-colors">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-2xl font-bold text-orange-600">1. Industry-Specific Subreddits</h3>
                <Users className="text-orange-600" size={28} />
              </div>
              <p className="text-gray-700 mb-3">
                <strong>Examples:</strong> r/smallbusiness, r/entrepreneur, r/marketing, r/webdev
              </p>
              <p className="text-gray-600 mb-3">
                These are communities where professionals and business owners gather to discuss challenges and share solutions.
              </p>
              <div className="bg-gray-50 p-4 rounded">
                <strong className="text-sm text-gray-700">How to find yours:</strong>
                <p className="text-sm text-gray-600 mt-1">Search "[your industry]" or "[your service]" on Reddit and sort by member count</p>
              </div>
            </div>

            <div className="border-2 border-gray-200 rounded-lg p-6 hover:border-orange-600 transition-colors">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-2xl font-bold text-orange-600">2. Location-Based Communities</h3>
                <Users className="text-orange-600" size={28} />
              </div>
              <p className="text-gray-700 mb-3">
                <strong>Examples:</strong> r/NYC, r/LosAngeles, r/AustinTX
              </p>
              <p className="text-gray-600 mb-3">
                Local subreddits are goldmines for local businesses. Residents frequently ask for service recommendations.
              </p>
              <div className="bg-gray-50 p-4 rounded">
                <strong className="text-sm text-gray-700">Pro tip:</strong>
                <p className="text-sm text-gray-600 mt-1">Also join neighborhood-specific subs within your city for hyper-local targeting</p>
              </div>
            </div>

            <div className="border-2 border-gray-200 rounded-lg p-6 hover:border-orange-600 transition-colors">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-2xl font-bold text-orange-600">3. Problem-Solution Communities</h3>
                <Users className="text-orange-600" size={28} />
              </div>
              <p className="text-gray-700 mb-3">
                <strong>Examples:</strong> r/HomeImprovement, r/personalfinance, r/productivity
              </p>
              <p className="text-gray-600 mb-3">
                People come here with specific problems. If your business solves those problems, you need to be here.
              </p>
            </div>

            <div className="border-2 border-gray-200 rounded-lg p-6 hover:border-orange-600 transition-colors">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-2xl font-bold text-orange-600">4. Buyer Intent Communities</h3>
                <Users className="text-orange-600" size={28} />
              </div>
              <p className="text-gray-700 mb-3">
                <strong>Examples:</strong> r/BuyItForLife, r/SuggestALaptop, r/whichbike
              </p>
              <p className="text-gray-600 mb-3">
                These communities exist purely for purchase recommendations. High-intent buyers actively seeking advice.
              </p>
            </div>

            <div className="border-2 border-gray-200 rounded-lg p-6 hover:border-orange-600 transition-colors">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-2xl font-bold text-orange-600">5. "Ask" Communities</h3>
                <Users className="text-orange-600" size={28} />
              </div>
              <p className="text-gray-700 mb-3">
                <strong>Examples:</strong> r/AskReddit, r/NoStupidQuestions, industry-specific "Ask" subs
              </p>
              <p className="text-gray-600 mb-3">
                Massive reach potential. Answer questions related to your expertise and build authority.
              </p>
            </div>
          </div>
        </div>

        {/* Page 5: Profile Setup Guide */}
        <div className="p-12 min-h-screen page-break">
          <h2 className="text-4xl font-bold text-gray-800 mb-8 border-b-4 border-orange-600 pb-4">
            Reddit Profile Setup: Do This First
          </h2>
          
          <div className="mb-6 bg-red-50 border-l-4 border-red-600 p-6 rounded-r-lg">
            <p className="text-gray-700 font-semibold">
              ⚠️ Critical: Don't skip this step! A new account posting business links will get banned instantly.
            </p>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <span className="bg-orange-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">1</span>
                Create Your Account (Day 1)
              </h3>
              <ul className="space-y-2 ml-10 text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-orange-600 mt-1 flex-shrink-0" size={18} />
                  <span>Choose a professional but approachable username (avoid obvious business names)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-orange-600 mt-1 flex-shrink-0" size={18} />
                  <span>Add a profile picture (professional or relatable, not a logo)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-orange-600 mt-1 flex-shrink-0" size={18} />
                  <span>Write a bio that mentions your expertise without being salesy</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <span className="bg-orange-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">2</span>
                Build Karma (Week 1-2)
              </h3>
              <div className="ml-10 space-y-4">
                <p className="text-gray-700">
                  <strong>Karma is your credibility score.</strong> You need at least 50-100 karma before posting business-related content.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-semibold mb-2">How to earn karma quickly:</p>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Leave helpful comments on posts in your target subreddits</li>
                    <li>• Answer questions people are asking</li>
                    <li>• Share your genuine experience (not promotional)</li>
                    <li>• Post in r/AskReddit or popular hobby subreddits</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <span className="bg-orange-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">3</span>
                Join Your Target Communities (Week 1)
              </h3>
              <ul className="space-y-2 ml-10 text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-orange-600 mt-1 flex-shrink-0" size={18} />
                  <span>Join 10-15 relevant subreddits</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-orange-600 mt-1 flex-shrink-0" size={18} />
                  <span>Read the rules of each community (critical!)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-orange-600 mt-1 flex-shrink-0" size={18} />
                  <span>Observe the tone and style of successful posts</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <span className="bg-orange-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">4</span>
                Engage Authentically (Ongoing)
              </h3>
              <div className="ml-10 bg-orange-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-3">
                  <strong>The 80/20 Rule:</strong>
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• 80% of your activity should be helpful, non-promotional engagement</li>
                  <li>• 20% can include subtle mentions of your business or expertise</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Page 6: Post Template 1 */}
        <div className="p-12 min-h-screen page-break">
          <h2 className="text-4xl font-bold text-gray-800 mb-8 border-b-4 border-orange-600 pb-4">
            7 Post Templates That Drive Traffic
          </h2>
          
          <div className="space-y-8">
            <div className="border-2 border-orange-600 rounded-lg p-6 bg-orange-50">
              <h3 className="text-2xl font-bold text-orange-800 mb-4">
                Template #1: The Experience Share
              </h3>
              <div className="bg-white p-6 rounded-lg mb-4">
                <p className="text-sm text-gray-500 mb-2">Example Title:</p>
                <p className="font-semibold text-lg mb-4">
                  "I spent $10k on [service/product] last year. Here's what actually worked."
                </p>
                <p className="text-sm text-gray-500 mb-2">Body Structure:</p>
                <div className="space-y-3 text-gray-700">
                  <p><strong>Intro:</strong> "Like many of you, I was struggling with [problem]..."</p>
                  <p><strong>Journey:</strong> Share 3-4 things you tried (including competitors)</p>
                  <p><strong>Solution:</strong> Explain what finally worked and why</p>
                  <p><strong>Results:</strong> Specific metrics or outcomes</p>
                  <p><strong>CTA:</strong> "Happy to answer questions in the comments"</p>
                </div>
              </div>
              <div className="bg-green-50 border-l-4 border-green-600 p-4 rounded-r">
                <p className="text-sm font-semibold text-green-800">Why it works:</p>
                <p className="text-sm text-gray-700">You're sharing genuine experience, not selling. People trust personal stories.</p>
              </div>
            </div>

            <div className="border-2 border-orange-600 rounded-lg p-6 bg-orange-50">
              <h3 className="text-2xl font-bold text-orange-800 mb-4">
                Template #2: The Comparison Post
              </h3>
              <div className="bg-white p-6 rounded-lg mb-4">
                <p className="text-sm text-gray-500 mb-2">Example Title:</p>
                <p className="font-semibold text-lg mb-4">
                  "[Option A] vs [Option B] vs [Option C]: Which one is actually worth it?"
                </p>
                <p className="text-sm text-gray-500 mb-2">Body Structure:</p>
                <div className="space-y-3 text-gray-700">
                  <p><strong>Setup:</strong> "I tested all three so you don't have to..."</p>
                  <p><strong>Criteria:</strong> List what you evaluated (price, quality, support, etc.)</p>
                  <p><strong>Breakdown:</strong> Fair assessment of each option</p>
                  <p><strong>Verdict:</strong> "For most people, I'd recommend..."</p>
                  <p><strong>Caveat:</strong> "But if you need X, go with Y instead"</p>
                </div>
              </div>
              <div className="bg-green-50 border-l-4 border-green-600 p-4 rounded-r">
                <p className="text-sm font-semibold text-green-800">Why it works:</p>
                <p className="text-sm text-gray-700">Comparison posts rank incredibly well and position you as an unbiased expert.</p>
              </div>
            </div>

            <div className="border-2 border-orange-600 rounded-lg p-6 bg-orange-50">
              <h3 className="text-2xl font-bold text-orange-800 mb-4">
                Template #3: The Mistake Post
              </h3>
              <div className="bg-white p-6 rounded-lg mb-4">
                <p className="text-sm text-gray-500 mb-2">Example Title:</p>
                <p className="font-semibold text-lg mb-4">
                  "5 expensive mistakes I made with [topic] (so you don't have to)"
                </p>
                <p className="text-sm text-gray-500 mb-2">Body Structure:</p>
                <div className="space-y-3 text-gray-700">
                  <p><strong>Hook:</strong> "This cost me $X and 6 months of frustration..."</p>
                  <p><strong>Mistake 1-5:</strong> Each with what happened and lesson learned</p>
                  <p><strong>What to do instead:</strong> Actionable alternative for each</p>
                  <p><strong>Close:</strong> "Hope this saves someone else the headache"</p>
                </div>
              </div>
              <div className="bg-green-50 border-l-4 border-green-600 p-4 rounded-r">
                <p className="text-sm font-semibold text-green-800">Why it works:</p>
                <p className="text-sm text-gray-700">Vulnerability builds trust. People love learning from others' mistakes.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Page 7: More Templates */}
        <div className="p-12 min-h-screen page-break">
          <h2 className="text-4xl font-bold text-gray-800 mb-8 border-b-4 border-orange-600 pb-4">
            7 Post Templates (Continued)
          </h2>
          
          <div className="space-y-8">
            <div className="border-2 border-orange-600 rounded-lg p-6 bg-orange-50">
              <h3 className="text-2xl font-bold text-orange-800 mb-4">
                Template #4: The Data Post
              </h3>
              <div className="bg-white p-6 rounded-lg mb-4">
                <p className="text-sm text-gray-500 mb-2">Example Title:</p>
                <p className="font-semibold text-lg mb-4">
                  "I analyzed 100 [businesses/cases/examples]. Here's what the successful ones did differently."
                </p>
                <p className="text-sm text-gray-500 mb-2">Body Structure:</p>
                <div className="space-y-3 text-gray-700">
                  <p><strong>Methodology:</strong> How you gathered the data</p>
                  <p><strong>Finding 1:</strong> Surprising insight with stats</p>
                  <p><strong>Finding 2-3:</strong> Additional patterns you noticed</p>
                  <p><strong>Takeaway:</strong> What this means for readers</p>
                  <p><strong>Action:</strong> One thing they should do based on this</p>
                </div>
              </div>
              <div className="bg-green-50 border-l-4 border-green-600 p-4 rounded-r">
                <p className="text-sm font-semibold text-green-800">Why it works:</p>
                <p className="text-sm text-gray-700">Original research gets massive engagement and backlinks. Positions you as an authority.</p>
              </div>
            </div>

            <div className="border-2 border-orange-600 rounded-lg p-6 bg-orange-50">
              <h3 className="text-2xl font-bold text-orange-800 mb-4">
                Template #5: The Question Post
              </h3>
              <div className="bg-white p-6 rounded-lg mb-4">
                <p className="text-sm text-gray-500 mb-2">Example Title:</p>
                <p className="font-semibold text-lg mb-4">
                  "Looking for [service] in [city]. What actually matters when choosing?"
                </p>
                <p className="text-sm text-gray-500 mb-2">Body Structure:</p>
                <div className="space-y-3 text-gray-700">
                  <p><strong>Context:</strong> Your specific situation</p>
                  <p><strong>Criteria:</strong> What you're looking for</p>
                  <p><strong>Confusion:</strong> Where you need help deciding</p>
                  <p><strong>Ask:</strong> Specific questions to the community</p>
                </div>
              </div>
              <div className="bg-green-50 border-l-4 border-green-600 p-4 rounded-r">
                <p className="text-sm fontimport React, { useState } from 'react';
import { FileDown, CheckCircle, TrendingUp, Users, Target, Clock, DollarSign } from 'lucide-react';

const RedditSEOPlaybook = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 12;

  const generatePDF = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 p-8">
      {/* Print Button */}
      <div className="max-w-4xl mx-auto mb-6 print:hidden">
        <button
          onClick={generatePDF}
          className="flex items-center gap-2 bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors shadow-lg"
        >
          <FileDown size={20} />
          Download as PDF
        </button>
        <p className="mt-2 text-sm text-gray-600">
          Click to open print dialog, then save as PDF
        </p>
      </div>

      {/* PDF Content */}
      <div className="max-w-4xl mx-auto bg-white shadow-2xl print:shadow-none">
        
        {/* Cover Page */}
        <div className="p-12 bg-gradient-to-br from-orange-600 to-red-600 text-white min-h-screen flex flex-col justify-center page-break">
          <div className="text-6xl font-bold mb-4">📊</div>
          <h1 className="text-5xl font-bold mb-6 leading-tight">
            The Reddit SEO Playbook
          </h1>
          <p className="text-2xl mb-8 opacity-90">
            How to Rank Your Business on Google Using Reddit in 30 Days
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold mb-4">Why This Matters Now:</h3>
            <div className="text-3xl font-bold mb-2">1,328% Increase</div>
            <p className="text-lg">
              Reddit's visibility on Google from July 2023 to April 2024
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <Clock className="mx-auto mb-2" size={24} />
              <div className="font-semibold">Build Time</div>
              <div className="text-sm opacity-90">3-4 hours</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <DollarSign className="mx-auto mb-2" size={24} />
              <div className="font-semibold">Cost</div>
              <div className="text-sm opacity-90">$0</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <Target className="mx-auto mb-2" size={24} />
              <div className="font-semibold">ROI Potential</div>
              <div className="text-sm opacity-90">Very High</div>
            </div>
          </div>
        </div>

        {/* Page 2: Stats Overview */}
        <div className="p-12 min-h-screen page-break">
          <h2 className="text-4xl font-bold text-gray-800 mb-8 border-b-4 border-orange-600 pb-4">
            Your Content Performance Snapshot
          </h2>
          
          <div className="mb-8 bg-orange-50 border-l-4 border-orange-600 p-6 rounded-r-lg">
            <p className="text-lg text-gray-700 leading-relaxed">
              Before we dive into the Reddit SEO strategy, let's look at how your content performed across different platforms. Notice anything interesting?
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 mb-8">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 text-white p-6 rounded-lg">
              <div className="text-sm opacity-75 mb-2">Twitter/X</div>
              <div className="text-4xl font-bold mb-2">79</div>
              <div className="text-sm">views</div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white p-6 rounded-lg">
              <div className="text-sm opacity-75 mb-2">LinkedIn</div>
              <div className="text-4xl font-bold mb-2">65</div>
              <div className="text-sm">views</div>
            </div>
            
            <div className="bg-gradient-to-br from-pink-600 to-purple-600 text-white p-6 rounded-lg">
              <div className="text-sm opacity-75 mb-2">Instagram</div>
              <div className="text-4xl font-bold mb-2">12</div>
              <div className="text-sm">views</div>
            </div>
            
            <div className="bg-gradient-to-br from-black to-gray-900 text-white p-6 rounded-lg">
              <div className="text-sm opacity-75 mb-2">TikTok</div>
              <div className="text-4xl font-bold mb-2">203</div>
              <div className="text-sm">views</div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-lg">
              <div className="text-sm opacity-75 mb-2">Facebook</div>
              <div className="text-4xl font-bold mb-2">260</div>
              <div className="text-sm">views</div>
            </div>
            
            <div className="bg-gradient-to-br from-orange-600 to-red-600 text-white p-6 rounded-lg shadow-xl transform scale-105">
              <TrendingUp className="mb-2" size={24} />
              <div className="text-sm opacity-75 mb-2">Reddit</div>
              <div className="text-5xl font-bold mb-2">1,700</div>
              <div className="text-sm">views 🚀</div>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
            <h3 className="font-bold text-xl mb-3 text-yellow-800">
              📈 The Reddit Advantage
            </h3>
            <p className="text-gray-700 text-lg">
              Reddit outperformed all other platforms combined by <strong>2.6x</strong>. While competitors focus on traditional social media, savvy businesses are dominating search results through Reddit.
            </p>
          </div>
        </div>

        {/* Page 3: Why Reddit SEO Matters */}
        <div className="p-12 min-h-screen page-break">
          <h2 className="text-4xl font-bold text-gray-800 mb-8 border-b-4 border-orange-600 pb-4">
            Why Reddit SEO Is The Opportunity of 2024-2025
          </h2>
          
          <div className="space-y-6">
            <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-lg">
              <h3 className="font-bold text-xl mb-3 text-red-800">
                🚨 The Problem You're Facing
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Your competitors are already ranking on Google's first page for "{'{'}your industry{'}'} + reddit" searches. When potential customers search for recommendations, they're finding your competitors' Reddit posts, not your website.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-1">•</span>
                  <span>Traditional SEO takes 6-12 months to show results</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-1">•</span>
                  <span>Paid ads are getting more expensive every quarter</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-1">•</span>
                  <span>Social media organic reach continues to decline</span>
                </li>
              </ul>
            </div>

            <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-lg">
              <h3 className="font-bold text-xl mb-3 text-green-800">
                ✅ The Reddit SEO Solution
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Google now prioritizes Reddit content in search results. A well-crafted Reddit post can rank on page 1 within days, not months.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                  <span><strong>Fast results:</strong> Rank within 7-30 days</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                  <span><strong>Zero cost:</strong> Completely free organic traffic</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                  <span><strong>High intent traffic:</strong> People actively seeking recommendations</span>
                </li>
              </ul>
            </div>

            <div className="bg-orange-50 border-l-4 border-orange-600 p-6 rounded-r-lg">
              <h3 className="font-bold text-xl mb-3 text-orange-800">
                📊 By The Numbers
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-white rounded-lg shadow">
                  <div className="text-3xl font-bold text-orange-600 mb-2">1,328%</div>
                  <div className="text-sm text-gray-600">Google visibility increase</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow">
                  <div className="text-3xl font-bold text-orange-600 mb-2">850M+</div>
                  <div className="text-sm text-gray-600">Monthly active users</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Page 4: 5 Reddit Communities */}
        <div className="p-12 min-h-screen page-break">
          <h2 className="text-4xl font-bold text-gray-800 mb-8 border-b-4 border-orange-600 pb-4">
            The 5 Reddit Communities Every Business Must Join
          </h2>
          
          <div className="mb-6 bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
            <p className="text-gray-700">
              <strong>Strategy:</strong> Focus on communities where your ideal customers are actively seeking recommendations and solutions.
            </p>
          </div>

          <div className="space-y-6">
            <div className="border-2 border-gray-200 rounded-lg p-6 hover:border-orange-600 transition-colors">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-2xl font-bold text-orange-600">1. Industry-Specific Subreddits</h3>
                <Users className="text-orange-600" size={28} />
              </div>
              <p className="text-gray-700 mb-3">
                <strong>Examples:</strong> r/smallbusiness, r/entrepreneur, r/marketing, r/webdev
              </p>
              <p className="text-gray-600 mb-3">
                These are communities where professionals and business owners gather to discuss challenges and share solutions.
              </p>
              <div className="bg-gray-50 p-4 rounded">
                <strong className="text-sm text-gray-700">How to find yours:</strong>
                <p className="text-sm text-gray-600 mt-1">Search "[your industry]" or "[your service]" on Reddit and sort by member count</p>
              </div>
            </div>

            <div className="border-2 border-gray-200 rounded-lg p-6 hover:border-orange-600 transition-colors">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-2xl font-bold text-orange-600">2. Location-Based Communities</h3>
                <Users className="text-orange-600" size={28} />
              </div>
              <p className="text-gray-700 mb-3">
                <strong>Examples:</strong> r/NYC, r/LosAngeles, r/AustinTX
              </p>
              <p className="text-gray-600 mb-3">
                Local subreddits are goldmines for local businesses. Residents frequently ask for service recommendations.
              </p>
              <div className="bg-gray-50 p-4 rounded">
                <strong className="text-sm text-gray-700">Pro tip:</strong>
                <p className="text-sm text-gray-600 mt-1">Also join neighborhood-specific subs within your city for hyper-local targeting</p>
              </div>
            </div>

            <div className="border-2 border-gray-200 rounded-lg p-6 hover:border-orange-600 transition-colors">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-2xl font-bold text-orange-600">3. Problem-Solution Communities</h3>
                <Users className="text-orange-600" size={28} />
              </div>
              <p className="text-gray-700 mb-3">
                <strong>Examples:</strong> r/HomeImprovement, r/personalfinance, r/productivity
              </p>
              <p className="text-gray-600 mb-3">
                People come here with specific problems. If your business solves those problems, you need to be here.
              </p>
            </div>

            <div className="border-2 border-gray-200 rounded-lg p-6 hover:border-orange-600 transition-colors">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-2xl font-bold text-orange-600">4. Buyer Intent Communities</h3>
                <Users className="text-orange-600" size={28} />
              </div>
              <p className="text-gray-700 mb-3">
                <strong>Examples:</strong> r/BuyItForLife, r/SuggestALaptop, r/whichbike
              </p>
              <p className="text-gray-600 mb-3">
                These communities exist purely for purchase recommendations. High-intent buyers actively seeking advice.
              </p>
            </div>

            <div className="border-2 border-gray-200 rounded-lg p-6 hover:border-orange-600 transition-colors">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-2xl font-bold text-orange-600">5. "Ask" Communities</h3>
                <Users className="text-orange-600" size={28} />
              </div>
              <p className="text-gray-700 mb-3">
                <strong>Examples:</strong> r/AskReddit, r/NoStupidQuestions, industry-specific "Ask" subs
              </p>
              <p className="text-gray-600 mb-3">
                Massive reach potential. Answer questions related to your expertise and build authority.
              </p>
            </div>
          </div>
        </div>

        {/* Page 5: Profile Setup Guide */}
        <div className="p-12 min-h-screen page-break">
          <h2 className="text-4xl font-bold text-gray-800 mb-8 border-b-4 border-orange-600 pb-4">
            Reddit Profile Setup: Do This First
          </h2>
          
          <div className="mb-6 bg-red-50 border-l-4 border-red-600 p-6 rounded-r-lg">
            <p className="text-gray-700 font-semibold">
              ⚠️ Critical: Don't skip this step! A new account posting business links will get banned instantly.
            </p>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <span className="bg-orange-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">1</span>
                Create Your Account (Day 1)
              </h3>
              <ul className="space-y-2 ml-10 text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-orange-600 mt-1 flex-shrink-0" size={18} />
                  <span>Choose a professional but approachable username (avoid obvious business names)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-orange-600 mt-1 flex-shrink-0" size={18} />
                  <span>Add a profile picture (professional or relatable, not a logo)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-orange-600 mt-1 flex-shrink-0" size={18} />
                  <span>Write a bio that mentions your expertise without being salesy</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <span className="bg-orange-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">2</span>
                Build Karma (Week 1-2)
              </h3>
              <div className="ml-10 space-y-4">
                <p className="text-gray-700">
                  <strong>Karma is your credibility score.</strong> You need at least 50-100 karma before posting business-related content.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-semibold mb-2">How to earn karma quickly:</p>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Leave helpful comments on posts in your target subreddits</li>
                    <li>• Answer questions people are asking</li>
                    <li>• Share your genuine experience (not promotional)</li>
                    <li>• Post in r/AskReddit or popular hobby subreddits</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <span className="bg-orange-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">3</span>
                Join Your Target Communities (Week 1)
              </h3>
              <ul className="space-y-2 ml-10 text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-orange-600 mt-1 flex-shrink-0" size={18} />
                  <span>Join 10-15 relevant subreddits</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-orange-600 mt-1 flex-shrink-0" size={18} />
                  <span>Read the rules of each community (critical!)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-orange-600 mt-1 flex-shrink-0" size={18} />
                  <span>Observe the tone and style of successful posts</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <span className="bg-orange-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">4</span>
                Engage Authentically (Ongoing)
              </h3>
              <div className="ml-10 bg-orange-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-3">
                  <strong>The 80/20 Rule:</strong>
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• 80% of your activity should be helpful, non-promotional engagement</li>
                  <li>• 20% can include subtle mentions of your business or expertise</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Page 6: Post Template 1 */}
        <div className="p-12 min-h-screen page-break">
          <h2 className="text-4xl font-bold text-gray-800 mb-8 border-b-4 border-orange-600 pb-4">
            7 Post Templates That Drive Traffic
          </h2>
          
          <div className="space-y-8">
            <div className="border-2 border-orange-600 rounded-lg p-6 bg-orange-50">
              <h3 className="text-2xl font-bold text-orange-800 mb-4">
                Template #1: The Experience Share
              </h3>
              <div className="bg-white p-6 rounded-lg mb-4">
                <p className="text-sm text-gray-500 mb-2">Example Title:</p>
                <p className="font-semibold text-lg mb-4">
                  "I spent $10k on [service/product] last year. Here's what actually worked."
                </p>
                <p className="text-sm text-gray-500 mb-2">Body Structure:</p>
                <div className="space-y-3 text-gray-700">
                  <p><strong>Intro:</strong> "Like many of you, I was struggling with [problem]..."</p>
                  <p><strong>Journey:</strong> Share 3-4 things you tried (including competitors)</p>
                  <p><strong>Solution:</strong> Explain what finally worked and why</p>
                  <p><strong>Results:</strong> Specific metrics or outcomes</p>
                  <p><strong>CTA:</strong> "Happy to answer questions in the comments"</p>
                </div>
              </div>
              <div className="bg-green-50 border-l-4 border-green-600 p-4 rounded-r">
                <p className="text-sm font-semibold text-green-800">Why it works:</p>
                <p className="text-sm text-gray-700">Can be answered by you (or others) with recommendations. Creates natural opportunities for mentions.</p>
              </div>
            </div>

            <div className="border-2 border-orange-600 rounded-lg p-6 bg-orange-50">
              <h3 className="text-2xl font-bold text-orange-800 mb-4">
                Template #6: The Resource List
              </h3>
              <div className="bg-white p-6 rounded-lg mb-4">
                <p className="text-sm text-gray-500 mb-2">Example Title:</p>
                <p className="font-semibold text-lg mb-4">
                  "Ultimate list of [tools/resources/services] for [audience] (Free + Paid)"
                </p>
                <p className="text-sm text-gray-500 mb-2">Body Structure:</p>
                <div className="space-y-3 text-gray-700">
                  <p><strong>Intro:</strong> "I've been in [industry] for X years..."</p>
                  <p><strong>Free options:</strong> List 5-7 with brief descriptions</p>
                  <p><strong>Paid options:</strong> List 3-5 with use cases</p>
                  <p><strong>Your pick:</strong> "Personally, I use X because..."</p>
                  <p><strong>Update:</strong> "Will keep this updated, drop suggestions below"</p>
                </div>
              </div>
              <div className="bg-green-50 border-l-4 border-green-600 p-4 rounded-r">
                <p className="text-sm font-semibold text-green-800">Why it works:</p>
                <p className="text-sm text-gray-700">Resource lists get bookmarked and shared. Great for SEO longevity.</p>
              </div>
            </div>

            <div className="border-2 border-orange-600 rounded-lg p-6 bg-orange-50">
              <h3 className="text-2xl font-bold text-orange-800 mb-4">
                Template #7: The AMA (Ask Me Anything)
              </h3>
              <div className="bg-white p-6 rounded-lg mb-4">
                <p className="text-sm text-gray-500 mb-2">Example Title:</p>
                <p className="font-semibold text-lg mb-4">
                  "I've run a [business type] for 10 years. AMA about [topic]"
                </p>
                <p className="text-sm text-gray-500 mb-2">Body Structure:</p>
                <div className="space-y-3 text-gray-700">
                  <p><strong>Credentials:</strong> Brief background establishing expertise</p>
                  <p><strong>Proof:</strong> Optional - screenshot, verification</p>
                  <p><strong>Invite:</strong> "Happy to answer any questions you have"</p>
                  <p><strong>Response:</strong> Answer every question thoroughly and quickly</p>
                </div>
              </div>
              <div className="bg-green-50 border-l-4 border-green-600 p-4 rounded-r">
                <p className="text-sm font-semibold text-green-800">Why it works:</p>
                <p className="text-sm text-gray-700">Establishes you as the expert. Generates massive engagement and builds community trust.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Page 8: 30-Day Roadmap */}
        <div className="p-12 min-h-screen page-break">
          <h2 className="text-4xl font-bold text-gray-800 mb-8 border-b-4 border-orange-600 pb-4">
            How to Rank on Google Using Reddit in 30 Days
          </h2>
          
          <div className="mb-6 bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
            <p className="text-gray-700">
              This is your step-by-step execution plan. Follow this timeline and you'll see results.
            </p>
          </div>

          <div className="space-y-6">
            <div className="border-l-4 border-orange-600 pl-6">
              <h3 className="text-2xl font-bold mb-3">Week 1: Foundation</h3>
              <div className="space-y-2 text-gray-700">
                <div className="flex items-start gap-3">
                  <div className="bg-orange-600 text-white px-2 py-1 rounded text-xs font-semibold mt-1">Day 1</div>
                  <div>
                    <p className="font-semibold">Create & optimize your Reddit account</p>
                    <p className="text-sm text-gray-600">Professional username, profile picture, bio</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-orange-600 text-white px-2 py-1 rounded text-xs font-semibold mt-1">Day 2-3</div>
                  <div>
                    <p className="font-semibold">Research and join 10-15 target subreddits</p>
                    <p className="text-sm text-gray-600">Read rules, observe top posts, understand the culture</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-orange-600 text-white px-2 py-1 rounded text-xs font-semibold mt-1">Day 4-7</div>
                  <div>
                    <p className="font-semibold">Build karma through genuine-semibold text-green-800">Why it works:</p>
                <p className="text-sm text-gray-700">You're sharing genuine experience, not selling. People trust personal stories.</p>
              </div>
            </div>

            <div className="border-2 border-orange-600 rounded-lg p-6 bg-orange-50">
              <h3 className="text-2xl font-bold text-orange-800 mb-4">
                Template #2: The Comparison Post
              </h3>
              <div className="bg-white p-6 rounded-lg mb-4">
                <p className="text-sm text-gray-500 mb-2">Example Title:</p>
                <p className="font-semibold text-lg mb-4">
                  "[Option A] vs [Option B] vs [Option C]: Which one is actually worth it?"
                </p>
                <p className="text-sm text-gray-500 mb-2">Body Structure:</p>
                <div className="space-y-3 text-gray-700">
                  <p><strong>Setup:</strong> "I tested all three so you don't have to..."</p>
                  <p><strong>Criteria:</strong> List what you evaluated (price, quality, support, etc.)</p>
                  <p><strong>Breakdown:</strong> Fair assessment of each option</p>
                  <p><strong>Verdict:</strong> "For most people, I'd recommend..."</p>
                  <p><strong>Caveat:</strong> "But if you need X, go with Y instead"</p>
                </div>
              </div>
              <div className="bg-green-50 border-l-4 border-green-600 p-4 rounded-r">
                <p className="text-sm font-semibold text-green-800">Why it works:</p>
                <p className="text-sm text-gray-700">Comparison posts rank incredibly well and position you as an unbiased expert.</p>
              </div>
            </div>

            <div className="border-2 border-orange-600 rounded-lg p-6 bg-orange-50">
              <h3 className="text-2xl font-bold text-orange-800 mb-4">
                Template #3: The Mistake Post
              </h3>
              <div className="bg-white p-6 rounded-lg mb-4">
                <p className="text-sm text-gray-500 mb-2">Example Title:</p>
                <p className="font-semibold text-lg mb-4">
                  "5 expensive mistakes I made with [topic] (so you don't have to)"
                </p>
                <p className="text-sm text-gray-500 mb-2">Body Structure:</p>
                <div className="space-y-3 text-gray-700">
                  <p><strong>Hook:</strong> "This cost me $X and 6 months of frustration..."</p>
                  <p><strong>Mistake 1-5:</strong> Each with what happened and lesson learned</p>
                  <p><strong>What to do instead:</strong> Actionable alternative for each</p>
                  <p><strong>Close:</strong> "Hope this saves someone else the headache"</p>
                </div>
              </div>
              <div className="bg-green-50 border-l-4 border-green-600 p-4 rounded-r">
                <p className="text-sm font-semibold text-green-800">Why it works:</p>
                <p className="text-sm text-gray-700">Vulnerability builds trust. People love learning from others' mistakes.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Page 7: More Templates */}
        <div className="p-12 min-h-screen page-break">
          <h2 className="text-4xl font-bold text-gray-800 mb-8 border-b-4 border-orange-600 pb-4">
            7 Post Templates (Continued)
          </h2>
          
          <div className="space-y-8">
            <div className="border-2 border-orange-600 rounded-lg p-6 bg-orange-50">
              <h3 className="text-2xl font-bold text-orange-800 mb-4">
                Template #4: The Data Post
              </h3>
              <div className="bg-white p-6 rounded-lg mb-4">
                <p className="text-sm text-gray-500 mb-2">Example Title:</p>
                <p className="font-semibold text-lg mb-4">
                  "I analyzed 100 [businesses/cases/examples]. Here's what the successful ones did differently."
                </p>
                <p className="text-sm text-gray-500 mb-2">Body Structure:</p>
                <div className="space-y-3 text-gray-700">
                  <p><strong>Methodology:</strong> How you gathered the data</p>
                  <p><strong>Finding 1:</strong> Surprising insight with stats</p>
                  <p><strong>Finding 2-3:</strong> Additional patterns you noticed</p>
                  <p><strong>Takeaway:</strong> What this means for readers</p>
                  <p><strong>Action:</strong> One thing they should do based on this</p>
                </div>
              </div>
              <div className="bg-green-50 border-l-4 border-green-600 p-4 rounded-r">
                <p className="text-sm font-semibold text-green-800">Why it works:</p>
                <p className="text-sm text-gray-700">Original research gets massive engagement and backlinks. Positions you as an authority.</p>
              </div>
            </div>

            <div className="border-2 border-orange-600 rounded-lg p-6 bg-orange-50">
              <h3 className="text-2xl font-bold text-orange-800 mb-4">
                Template #5: The Question Post
              </h3>
              <div className="bg-white p-6 rounded-lg mb-4">
                <p className="text-sm text-gray-500 mb-2">Example Title:</p>
                <p className="font-semibold text-lg mb-4">
                  "Looking for [service] in [city]. What actually matters when choosing?"
                </p>
                <p className="text-sm text-gray-500 mb-2">Body Structure:</p>
                <div className="space-y-3 text-gray-700">
                  <p><strong>Context:</strong> Your specific situation</p>
                  <p><strong>Criteria:</strong> What you're looking for</p>
                  <p><strong>Confusion:</strong> Where you need help deciding</p>
                  <p><strong>Ask:</strong> Specific questions to the community</p>
                </div>
              </div>
              <div className="bg-green-50 border-l-4 border-green-600 p-4 rounded-r">
                <p className="text-sm fontimport React, { useState } from 'react';
import { FileDown, CheckCircle, TrendingUp, Users, Target, Clock, DollarSign, ChevronRight } from 'lucide-react';

const RedditSEOPlaybook = () => {
  const [currentSection, setCurrentSection] = useState('cover');

  const sections = [
    { id: 'cover', name: 'Cover Page' },
    { id: 'stats', name: 'Performance Stats' },
    { id: 'why', name: 'Why Reddit SEO' },
    { id: 'communities', name: '5 Communities' },
    { id: 'profile', name: 'Profile Setup' },
    { id: 'templates1', name: 'Templates 1-3' },
    { id: 'templates2', name: 'Templates 4-7' },
    { id: 'roadmap', name: '30-Day Roadmap' },
    { id: 'mistakes', name: 'Avoid These Mistakes' },
    { id: 'case-studies', name: 'Case Studies' },
    { id: 'tools', name: 'Tools & Resources' },
    { id: 'conclusion', name: 'Next Steps' }
  ];

  const generatePDF = () => {
    window.print();
  };

  const renderSection = () => {
    switch(currentSection) {
      case 'cover':
        return <CoverPage />;
      case 'stats':
        return <StatsPage />;
      case 'why':
        return <WhyRedditPage />;
      case 'communities':
        return <CommunitiesPage />;
      case 'profile':
        return <ProfilePage />;
      case 'templates1':
        return <Templates1Page />;
      case 'templates2':
        return <Templates2Page />;
      case 'roadmap':
        return <RoadmapPage />;
      case 'mistakes':
        return <MistakesPage />;
      case 'case-studies':
        return <CaseStudiesPage />;
      case 'tools':
        return <ToolsPage />;
      case 'conclusion':
        return <ConclusionPage />;
      default:
        return <CoverPage />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      {/* Navigation */}
      <div className="print:hidden bg-white border-b shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold text-orange-600">The Reddit SEO Playbook</h1>
            <button
              onClick={generatePDF}
              className="flex items-center gap-2 bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition-colors shadow"
            >
              <FileDown size={18} />
              Download PDF
            </button>
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setCurrentSection(section.id)}
                className={`px-4 py-2 rounded-lg whitespace-nowrap text-sm font-medium transition-colors ${
                  currentSection === section.id
                    ? 'bg-orange-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {section.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto p-8">
        <div className="bg-white shadow-2xl print:shadow-none min-h-screen">
          {renderSection()}
        </div>
      </div>
    </div>
  );
};

const CoverPage = () => (
  <div className="p-12 bg-gradient-to-br from-orange-600 to-red-600 text-white min-h-screen flex flex-col justify-center">
    <div className="text-6xl font-bold mb-4">📊</div>
    <h1 className="text-5xl font-bold mb-6 leading-tight">
      The Reddit SEO Playbook
    </h1>
    <p className="text-2xl mb-8 opacity-90">
      How to Rank Your Business on Google Using Reddit in 30 Days
    </p>
    
    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8">
      <h3 className="text-xl font-semibold mb-4">Why This Matters Now:</h3>
      <div className="text-3xl font-bold mb-2">1,328% Increase</div>
      <p className="text-lg">
        Reddit's visibility on Google from July 2023 to April 2024
      </p>
    </div>

    <div className="grid grid-cols-3 gap-4 text-center">
      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
        <Clock className="mx-auto mb-2" size={24} />
        <div className="font-semibold">Build Time</div>
        <div className="text-sm opacity-90">3-4 hours</div>
      </div>
      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
        <DollarSign className="mx-auto mb-2" size={24} />
        <div className="font-semibold">Cost</div>
        <div className="text-sm opacity-90">$0</div>
      </div>
      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
        <Target className="mx-auto mb-2" size={24} />
        <div className="font-semibold">ROI Potential</div>
        <div className="text-sm opacity-90">Very High</div>
      </div>
    </div>
  </div>
);

const StatsPage = () => (
  <div className="p-12 min-h-screen">
    <h2 className="text-4xl font-bold text-gray-800 mb-8 border-b-4 border-orange-600 pb-4">
      Your Content Performance Snapshot
    </h2>
    
    <div className="mb-8 bg-orange-50 border-l-4 border-orange-600 p-6 rounded-r-lg">
      <p className="text-lg text-gray-700 leading-relaxed">
        Before we dive into the Reddit SEO strategy, let's look at how your content performed across different platforms. Notice anything interesting?
      </p>
    </div>

    <div className="grid grid-cols-2 gap-6 mb-8">
      <div className="bg-gradient-to-br from-gray-800 to-gray-900 text-white p-6 rounded-lg">
        <div className="text-sm opacity-75 mb-2">Twitter/X</div>
        <div className="text-4xl font-bold mb-2">79</div>
        <div className="text-sm">views</div>
      </div>
      
      <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white p-6 rounded-lg">
        <div className="text-sm opacity-75 mb-2">LinkedIn</div>
        <div className="text-4xl font-bold mb-2">65</div>
        <div className="text-sm">views</div>
      </div>
      
      <div className="bg-gradient-to-br from-pink-600 to-purple-600 text-white p-6 rounded-lg">
        <div className="text-sm opacity-75 mb-2">Instagram</div>
        <div className="text-4xl font-bold mb-2">12</div>
        <div className="text-sm">views</div>
      </div>
      
      <div className="bg-gradient-to-br from-black to-gray-900 text-white p-6 rounded-lg">
        <div className="text-sm opacity-75 mb-2">TikTok</div>
        <div className="text-4xl font-bold mb-2">203</div>
        <div className="text-sm">views</div>
      </div>
      
      <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-lg">
        <div className="text-sm opacity-75 mb-2">Facebook</div>
        <div className="text-4xl font-bold mb-2">260</div>
        <div className="text-sm">views</div>
      </div>
      
      <div className="bg-gradient-to-br from-orange-600 to-red-600 text-white p-6 rounded-lg shadow-xl transform scale-105">
        <TrendingUp className="mb-2" size={24} />
        <div className="text-sm opacity-75 mb-2">Reddit</div>
        <div className="text-5xl font-bold mb-2">1,700</div>
        <div className="text-sm">views 🚀</div>
      </div>
    </div>

    <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
      <h3 className="font-bold text-xl mb-3 text-yellow-800">
        📈 The Reddit Advantage
      </h3>
      <p className="text-gray-700 text-lg">
        Reddit outperformed all other platforms combined by <strong>2.6x</strong>. While competitors focus on traditional social media, savvy businesses are dominating search results through Reddit.
      </p>
    </div>
  </div>
);

const WhyRedditPage = () => (
  <div className="p-12 min-h-screen">
    <h2 className="text-4xl font-bold text-gray-800 mb-8 border-b-4 border-orange-600 pb-4">
      Why Reddit SEO Is The Opportunity of 2024-2025
    </h2>
    
    <div className="space-y-6">
      <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-lg">
        <h3 className="font-bold text-xl mb-3 text-red-800">
          🚨 The Problem You're Facing
        </h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Your competitors are already ranking on Google's first page for "your industry + reddit" searches. When potential customers search for recommendations, they're finding your competitors' Reddit posts, not your website.
        </p>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-start gap-2">
            <span className="text-red-600 mt-1">•</span>
            <span>Traditional SEO takes 6-12 months to show results</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-600 mt-1">•</span>
            <span>Paid ads are getting more expensive every quarter</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-600 mt-1">•</span>
            <span>Social media organic reach continues to decline</span>
          </li>
        </ul>
      </div>

      <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-lg">
        <h3 className="font-bold text-xl mb-3 text-green-800">
          ✅ The Reddit SEO Solution
        </h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Google now prioritizes Reddit content in search results. A well-crafted Reddit post can rank on page 1 within days, not months.
        </p>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-start gap-2">
            <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
            <span><strong>Fast results:</strong> Rank within 7-30 days</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
            <span><strong>Zero cost:</strong> Completely free organic traffic</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
            <span><strong>High intent traffic:</strong> People actively seeking recommendations</span>
          </li>
        </ul>
      </div>

      <div className="bg-orange-50 border-l-4 border-orange-600 p-6 rounded-r-lg">
        <h3 className="font-bold text-xl mb-3 text-orange-800">
          📊 By The Numbers
        </h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center p-4 bg-white rounded-lg shadow">
            <div className="text-3xl font-bold text-orange-600 mb-2">1,328%</div>
            <div className="text-sm text-gray-600">Google visibility increase</div>
          </div>
          <div className="text-center p-4 bg-white rounded-lg shadow">
            <div className="text-3xl font-bold text-orange-600 mb-2">850M+</div>
            <div className="text-sm text-gray-600">Monthly active users</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const CommunitiesPage = () => (
  <div className="p-12 min-h-screen">
    <h2 className="text-4xl font-bold text-gray-800 mb-8 border-b-4 border-orange-600 pb-4">
      The 5 Reddit Communities Every Business Must Join
    </h2>
    
    <div className="mb-6 bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
      <p className="text-gray-700">
        <strong>Strategy:</strong> Focus on communities where your ideal customers are actively seeking recommendations and solutions.
      </p>
    </div>

    <div className="space-y-6">
      <div className="border-2 border-gray-200 rounded-lg p-6 hover:border-orange-600 transition-colors">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-2xl font-bold text-orange-600">1. Industry-Specific Subreddits</h3>
          <Users className="text-orange-600" size={28} />
        </div>
        <p className="text-gray-700 mb-3">
          <strong>Examples:</strong> r/smallbusiness, r/entrepreneur, r/marketing, r/webdev
        </p>
        <p className="text-gray-600 mb-3">
          These are communities where professionals and business owners gather to discuss challenges and share solutions.
        </p>
        <div className="bg-gray-50 p-4 rounded">
          <strong className="text-sm text-gray-700">How to find yours:</strong>
          <p className="text-sm text-gray-600 mt-1">Search "[your industry]" or "[your service]" on Reddit and sort by member count</p>
        </div>
      </div>

      <div className="border-2 border-gray-200 rounded-lg p-6 hover:border-orange-600 transition-colors">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-2xl font-bold text-orange-600">2. Location-Based Communities</h3>
          <Users className="text-orange-600" size={28} />
        </div>
        <p className="text-gray-700 mb-3">
          <strong>Examples:</strong> r/NYC, r/LosAngeles, r/AustinTX
        </p>
        <p className="text-gray-600 mb-3">
          Local subreddits are goldmines for local businesses. Residents frequently ask for service recommendations.
        </p>
        <div className="bg-gray-50 p-4 rounded">
          <strong className="text-sm text-gray-700">Pro tip:</strong>
          <p className="text-sm text-gray-600 mt-1">Also join neighborhood-specific subs within your city for hyper-local targeting</p>
        </div>
      </div>

      <div className="border-2 border-gray-200 rounded-lg p-6 hover:border-orange-600 transition-colors">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-2xl font-bold text-orange-600">3. Problem-Solution Communities</h3>
          <Users className="text-orange-600" size={28} />
        </div>
        <p className="text-gray-700 mb-3">
          <strong>Examples:</strong> r/HomeImprovement, r/personalfinance, r/productivity
        </p>
        <p className="text-gray-600 mb-3">
          People come here with specific problems. If your business solves those problems, you need to be here.
        </p>
      </div>

      <div className="border-2 border-gray-200 rounded-lg p-6 hover:border-orange-600 transition-colors">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-2xl font-bold text-orange-600">4. Buyer Intent Communities</h3>
          <Users className="text-orange-600" size={28} />
        </div>
        <p className="text-gray-700 mb-3">
          <strong>Examples:</strong> r/BuyItForLife, r/SuggestALaptop, r/whichbike
        </p>
        <p className="text-gray-600 mb-3">
          These communities exist purely for purchase recommendations. High-intent buyers actively seeking advice.
        </p>
      </div>

      <div className="border-2 border-gray-200 rounded-lg p-6 hover:border-orange-600 transition-colors">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-2xl font-bold text-orange-600">5. "Ask" Communities</h3>
          <Users className="text-orange-600" size={28} />
        </div>
        <p className="text-gray-700 mb-3">
          <strong>Examples:</strong> r/AskReddit, r/NoStupidQuestions, industry-specific "Ask" subs
        </p>
        <p className="text-gray-600 mb-3">
          Massive reach potential. Answer questions related to your expertise and build authority.
        </p>
      </div>
    </div>
  </div>
);

const ProfilePage = () => (
  <div className="p-12 min-h-screen">
    <h2 className="text-4xl font-bold text-gray-800 mb-8 border-b-4 border-orange-600 pb-4">
      Reddit Profile Setup: Do This First
    </h2>
    
    <div className="mb-6 bg-red-50 border-l-4 border-red-600 p-6 rounded-r-lg">
      <p className="text-gray-700 font-semibold">
        ⚠️ Critical: Don't skip this step! A new account posting business links will get banned instantly.
      </p>
    </div>

    <div className="space-y-8">
      <div>
        <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <span className="bg-orange-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">1</span>
          Create Your Account (Day 1)
        </h3>
        <ul className="space-y-2 ml-10 text-gray-700">
          <li className="flex items-start gap-2">
            <CheckCircle className="text-orange-600 mt-1 flex-shrink-0" size={18} />
            <span>Choose a professional but approachable username (avoid obvious business names)</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="text-orange-600 mt-1 flex-shrink-0" size={18} />
            <span>Add a profile picture (professional or relatable, not a logo)</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="text-orange-600 mt-1 flex-shrink-0" size={18} />
            <span>Write a bio that mentions your expertise without being salesy</span>
          </li>
        </ul>
      </div>

      <div>
        <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <span className="bg-orange-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">2</span>
          Build Karma (Week 1-2)
        </h3>
        <div className="ml-10 space-y-4">
          <p className="text-gray-700">
            <strong>Karma is your credibility score.</strong> You need at least 50-100 karma before posting business-related content.
          </p>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="font-semibold mb-2">How to earn karma quickly:</p>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>• Leave helpful comments on posts in your target subreddits</li>
              <li>• Answer questions people are asking</li>
              <li>• Share your genuine experience (not promotional)</li>
              <li>• Post in r/AskReddit or popular hobby subreddits</li>
            </ul>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <span className="bg-orange-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">3</span>
          Join Your Target Communities (Week 1)
        </h3>
        <ul className="space-y-2 ml-10 text-gray-700">
          <li className="flex items-start gap-2">
            <CheckCircle className="text-orange-600 mt-1 flex-shrink-0" size={18} />
            <span>Join 10-15 relevant subreddits</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="text-orange-600 mt-1 flex-shrink-0" size={18} />
            <span>Read the rules of each community (critical!)</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="text-orange-600 mt-1 flex-shrink-0" size={18} />
            <span>Observe the tone and style of successful posts</span>
          </li>
        </ul>
      </div>

      <div>
        <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <span className="bg-orange-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">4</span>
          Engage Authentically (Ongoing)
        </h3>
        <div className="ml-10 bg-orange-50 p-6 rounded-lg">
          <p className="text-gray-700 mb-3">
            <strong>The 80/20 Rule:</strong>
          </p>
          <ul className="space-y-2 text-gray-700">
            <li>• 80% of your activity should be helpful, non-promotional engagement</li>
            <li>• 20% can include subtle mentions of your business or expertise</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

const Templates1Page = () => (
  <div className="p-12 min-h-screen">
    <h2 className="text-4xl font-bold text-gray-800 mb-8 border-b-4 border-orange-600 pb-4">
      7 Post Templates That Drive Traffic (Part 1)
    </h2>
    
    <div className="space-y-8">
      <div className="border-2 border-orange-600 rounded-lg p-6 bg-orange-50">
        <h3 className="text-2xl font-bold text-orange-800 mb-4">
          Template #1: The Experience Share
        </h3>
        <div className="bg-white p-6 rounded-lg mb-4">
          <p className="text-sm text-gray-500 mb-2">Example Title:</p>
          <p className="font-semibold text-lg mb-4">
            "I spent $10k on [service/product] last year. Here's what actually worked."
          </p>
          <p className="text-sm text-gray-500 mb-2">Body Structure:</p>
          <div className="space-y-3 text-gray-700">
            <p><strong>Intro:</strong> "Like many of you, I was struggling with [problem]..."</p>
            <p><strong>Journey:</strong> Share 3-4 things you tried (including competitors)</p>
            <p><strong>Solution:</strong> Explain what finally worked and why</p>
            <p><strong>Results:</strong> Specific metrics or outcomes</p>
            <p><strong>CTA:</strong> "Happy to answer questions in the comments"</p>
          </div>
        </div>
        <div className="bg-green-50 border-l-4 border-green-600 p-4 rounded-r">
          <p className="text-sm font-semibold text-green-800">Why it works:</p>
          <p className="text-sm text-gray-700">You're sharing genuine experience, not selling. People trust personal stories.</p>
        </div>
      </div>

      <div className="border-2 border-orange-600 rounded-lg p-6 bg-orange-50">
        <h3 className="text-2xl font-bold text-orange-800 mb-4">
          Template #2: The Comparison Post
        </h3>
        <div className="bg-white p-6 rounded-lg mb-4">
          <p className="text-sm text-gray-500 mb-2">Example Title:</p>
          <p className="font-semibold text-lg mb-4">
            "[Option A] vs [Option B] vs [Option C]: Which one is actually worth it?"
          </p>
          <p className="text-sm text-gray-500 mb-2">Body Structure:</p>
          <div className="space-y-3 text-gray-700">
            <p><strong>Setup:</strong> "I tested all three so you don't have to..."</p>
            <p><strong>Criteria:</strong> List what you evaluated (price, quality, support, etc.)</p>
            <p><strong>Breakdown:</strong> Fair assessment of each option</p>
            <p><strong>Verdict:</strong> "For most people, I'd recommend..."</p>
            <p><strong>Caveat:</strong> "But if you need X, go with Y instead"</p>
          </div>
        </div>
        <div className="bg-green-50 border-l-4 border-green-600 p-4 rounded-r">
          <p className="text-sm font-semibold text-green-800">Why it works:</p>
          <p className="text-sm text-gray-700">Comparison posts rank incredibly well and position you as an unbiased expert.</p>
        </div>
      </div>

      <div className="border-2 border-orange-600 rounded-lg p-6 bg-orange-50">
        <h3 className="text-2xl font-bold text-orange-800 mb-4">
          Template #3: The Mistake Post
        </h3>
        <div className="bg-white p-6 rounded-lg mb-4">
          <p className="text-sm text-gray-500 mb-2">Example Title:</p>
          <p className="font-semibold text-lg mb-4">
            "5 expensive mistakes I made with [topic] (so you don't have to)"
          </p>
          <p className="text-sm text-gray-500 mb-2">Body Structure:</p>
          <div className="space-y-3 text-gray-700">
            <p><strong>Hook:</strong> "This cost me $X and 6 months of frustration..."</p>
            <p><strong>Mistake 1-5:</strong> Each with what happened and lesson learned</p>
            <p><strong>What to do instead:</strong> Actionable alternative for each</p>
            <p><strong>Close:</strong> "Hope this saves someone else the headache"</p>
          </div>
        </div>
        <div className="bg-green-50 border-l-4 border-green-600 p-4 rounded-r">
          <p className="text-sm font-semibold text-green-800">Why it works:</p>
          <p className="text-sm text-gray-700">Vulnerability builds trust. People love learning from others' mistakes.</p>
        </div>
      </div>
    </div>
  </div>
);

const Templates2Page = () => (
  <div className="p-12 min-h-screen">
    <h2 className="text-4xl font-bold text-gray-800 mb-8 border-b-4 border-orange-600 pb-4">
      7 Post Templates That Drive Traffic (Part 2)
    </h2>
    
    <div className="space-y-8">
      <div className="border-2 border-orange-600 rounded-lg p-6 bg-orange-50">
        <h3 className="text-2xl font-bold text-orange-800 mb-4">
          Template #4: The Data Post
        </h3>
        <div className="bg-white p-6 rounded-lg mb-4">
          <p className="text-sm text-gray-500 mb-2">Example Title:</p>
          <p className="font-semibold text-lg mb-4">
            "I analyzed 100 [businesses/cases/examples]. Here's what the successful ones did differently."
          </p>
          <p className="text-sm text-gray-500 mb-import React, { useState } from 'react';
import { FileDown, CheckCircle, TrendingUp, Users, Target, Clock, DollarSign, ChevronRight } from 'lucide-react';

const RedditSEOPlaybook = () => {
  const [currentSection, setCurrentSection] = useState('cover');

  const sections = [
    { id: 'cover', name: 'Cover Page' },
    { id: 'stats', name: 'Performance Stats' },
    { id: 'why', name: 'Why Reddit SEO' },
    { id: 'communities', name: '5 Communities' },
    { id: 'profile', name: 'Profile Setup' },
    { id: 'templates1', name: 'Templates 1-3' },
    { id: 'templates2', name: 'Templates 4-7' },
    { id: 'roadmap', name: '30-Day Roadmap' },
    { id: 'mistakes', name: 'Avoid These Mistakes' },
    { id: 'case-studies', name: 'Case Studies' },
    { id: 'tools', name: 'Tools & Resources' },
    { id: 'conclusion', name: 'Next Steps' }
  ];

  const generatePDF = () => {
    window.print();
  };

  const renderSection = () => {
    switch(currentSection) {
      case 'cover':
        return <CoverPage />;
      case 'stats':
        return <StatsPage />;
      case 'why':
        return <WhyRedditPage />;
      case 'communities':
        return <CommunitiesPage />;
      case 'profile':
        return <ProfilePage />;
      case 'templates1':
        return <Templates1Page />;
      case 'templates2':
        return <Templates2Page />;
      case 'roadmap':
        return <RoadmapPage />;
      case 'mistakes':
        return <MistakesPage />;
      case 'case-studies':
        return <CaseStudiesPage />;
      case 'tools':
        return <ToolsPage />;
      case 'conclusion':
        return <ConclusionPage />;
      default:
        return <CoverPage />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      {/* Navigation */}
      <div className="print:hidden bg-white border-b shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold text-orange-600">The Reddit SEO Playbook</h1>
            <button
              onClick={generatePDF}
              className="flex items-center gap-2 bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition-colors shadow"
            >
              <FileDown size={18} />
              Download PDF
            </button>
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setCurrentSection(section.id)}
                className={`px-4 py-2 rounded-lg whitespace-nowrap text-sm font-medium transition-colors ${
                  currentSection === section.id
                    ? 'bg-orange-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {section.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto p-8">
        <div className="bg-white shadow-2xl print:shadow-none min-h-screen">
          {renderSection()}
        </div>
      </div>
    </div>
  );
};

const CoverPage = () => (
  <div className="p-12 bg-gradient-to-br from-orange-600 to-red-600 text-white min-h-screen flex flex-col justify-center">
    <div className="text-6xl font-bold mb-4">📊</div>
    <h1 className="text-5xl font-bold mb-6 leading-tight">
      The Reddit SEO Playbook
    </h1>
    <p className="text-2xl mb-8 opacity-90">
      How to Rank Your Business on Google Using Reddit in 30 Days
    </p>
    
    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8">
      <h3 className="text-xl font-semibold mb-4">Why This Matters Now:</h3>
      <div className="text-3xl font-bold mb-2">1,328% Increase</div>
      <p className="text-lg">
        Reddit's visibility on Google from July 2023 to April 2024
      </p>
    </div>

    <div className="grid grid-cols-3 gap-4 text-center">
      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
        <Clock className="mx-auto mb-2" size={24} />
        <div className="font-semibold">Build Time</div>
        <div className="text-sm opacity-90">3-4 hours</div>
      </div>
      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
        <DollarSign className="mx-auto mb-2" size={24} />
        <div className="font-semibold">Cost</div>
        <div className="text-sm opacity-90">$0</div>
      </div>
      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
        <Target className="mx-auto mb-2" size={24} />
        <div className="font-semibold">ROI Potential</div>
        <div className="text-sm opacity-90">Very High</div>
      </div>
    </div>
  </div>
);

const StatsPage = () => (
  <div className="p-12 min-h-screen">
    <h2 className="text-4xl font-bold text-gray-800 mb-8 border-b-4 border-orange-600 pb-4">
      Your Content Performance Snapshot
    </h2>
    
    <div className="mb-8 bg-orange-50 border-l-4 border-orange-600 p-6 rounded-r-lg">
      <p className="text-lg text-gray-700 leading-relaxed">
        Before we dive into the Reddit SEO strategy, let's look at how your content performed across different platforms. Notice anything interesting?
      </p>
    </div>

    <div className="grid grid-cols-2 gap-6 mb-8">
      <div className="bg-gradient-to-br from-gray-800 to-gray-900 text-white p-6 rounded-lg">
        <div className="text-sm opacity-75 mb-2">Twitter/X</div>
        <div className="text-4xl font-bold mb-2">79</div>
        <div className="text-sm">views</div>
      </div>
      
      <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white p-6 rounded-lg">
        <div className="text-sm opacity-75 mb-2">LinkedIn</div>
        <div className="text-4xl font-bold mb-2">65</div>
        <div className="text-sm">views</div>
      </div>
      
      <div className="bg-gradient-to-br from-pink-600 to-purple-600 text-white p-6 rounded-lg">
        <div className="text-sm opacity-75 mb-2">Instagram</div>
        <div className="text-4xl font-bold mb-2">12</div>
        <div className="text-sm">views</div>
      </div>
      
      <div className="bg-gradient-to-br from-black to-gray-900 text-white p-6 rounded-lg">
        <div className="text-sm opacity-75 mb-2">TikTok</div>
        <div className="text-4xl font-bold mb-2">203</div>
        <div className="text-sm">views</div>
      </div>
      
      <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-lg">
        <div className="text-sm opacity-75 mb-2">Facebook</div>
        <div className="text-4xl font-bold mb-2">260</div>
        <div className="text-sm">views</div>
      </div>
      
      <div className="bg-gradient-to-br from-orange-600 to-red-600 text-white p-6 rounded-lg shadow-xl transform scale-105">
        <TrendingUp className="mb-2" size={24} />
        <div className="text-sm opacity-75 mb-2">Reddit</div>
        <div className="text-5xl font-bold mb-2">1,700</div>
        <div className="text-sm">views 🚀</div>
      </div>
    </div>

    <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
      <h3 className="font-bold text-xl mb-3 text-yellow-800">
        📈 The Reddit Advantage
      </h3>
      <p className="text-gray-700 text-lg">
        Reddit outperformed all other platforms combined by <strong>2.6x</strong>. While competitors focus on traditional social media, savvy businesses are dominating search results through Reddit.
      </p>
    </div>
  </div>
);

const WhyRedditPage = () => (
  <div className="p-12 min-h-screen">
    <h2 className="text-4xl font-bold text-gray-800 mb-8 border-b-4 border-orange-600 pb-4">
      Why Reddit SEO Is The Opportunity of 2024-2025
    </h2>
    
    <div className="space-y-6">
      <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-lg">
        <h3 className="font-bold text-xl mb-3 text-red-800">
          🚨 The Problem You're Facing
        </h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Your competitors are already ranking on Google's first page for "your industry + reddit" searches. When potential customers search for recommendations, they're finding your competitors' Reddit posts, not your website.
        </p>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-start gap-2">
            <span className="text-red-600 mt-1">•</span>
            <span>Traditional SEO takes 6-12 months to show results</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-600 mt-1">•</span>
            <span>Paid ads are getting more expensive every quarter</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-600 mt-1">•</span>
            <span>Social media organic reach continues to decline</span>
          </li>
        </ul>
      </div>

      <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-lg">
        <h3 className="font-bold text-xl mb-3 text-green-800">
          ✅ The Reddit SEO Solution
        </h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Google now prioritizes Reddit content in search results. A well-crafted Reddit post can rank on page 1 within days, not months.
        </p>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-start gap-2">
            <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
            <span><strong>Fast results:</strong> Rank within 7-30 days</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
            <span><strong>Zero cost:</strong> Completely free organic traffic</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
            <span><strong>High intent traffic:</strong> People actively seeking recommendations</span>
          </li>
        </ul>
      </div>

      <div className="bg-orange-50 border-l-4 border-orange-600 p-6 rounded-r-lg">
        <h3 className="font-bold text-xl mb-3 text-orange-800">
          📊 By The Numbers
        </h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center p-4 bg-white rounded-lg shadow">
            <div className="text-3xl font-bold text-orange-600 mb-2">1,328%</div>
            <div className="text-sm text-gray-600">Google visibility increase</div>
          </div>
          <div className="text-center p-4 bg-white rounded-lg shadow">
            <div className="text-3xl font-bold text-orange-600 mb-2">850M+</div>
            <div className="text-sm text-gray-600">Monthly active users</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const CommunitiesPage = () => (
  <div className="p-12 min-h-screen">
    <h2 className="text-4xl font-bold text-gray-800 mb-8 border-b-4 border-orange-600 pb-4">
      The 5 Reddit Communities Every Business Must Join
    </h2>
    
    <div className="mb-6 bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
      <p className="text-gray-700">
        <strong>Strategy:</strong> Focus on communities where your ideal customers are actively seeking recommendations and solutions.
      </p>
    </div>

    <div className="space-y-6">
      <div className="border-2 border-gray-200 rounded-lg p-6 hover:border-orange-600 transition-colors">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-2xl font-bold text-orange-600">1. Industry-Specific Subreddits</h3>
          <Users className="text-orange-600" size={28} />
        </div>
        <p className="text-gray-700 mb-3">
          <strong>Examples:</strong> r/smallbusiness, r/entrepreneur, r/marketing, r/webdev
        </p>
        <p className="text-gray-600 mb-3">
          These are communities where professionals and business owners gather to discuss challenges and share solutions.
        </p>
        <div className="bg-gray-50 p-4 rounded">
          <strong className="text-sm text-gray-700">How to find yours:</strong>
          <p className="text-sm text-gray-600 mt-1">Search "[your industry]" or "[your service]" on Reddit and sort by member count</p>
        </div>
      </div>

      <div className="border-2 border-gray-200 rounded-lg p-6 hover:border-orange-600 transition-colors">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-2xl font-bold text-orange-600">2. Location-Based Communities</h3>
          <Users className="text-orange-600" size={28} />
        </div>
        <p className="text-gray-700 mb-3">
          <strong>Examples:</strong> r/NYC, r/LosAngeles, r/AustinTX
        </p>
        <p className="text-gray-600 mb-3">
          Local subreddits are goldmines for local businesses. Residents frequently ask for service recommendations.
        </p>
        <div className="bg-gray-50 p-4 rounded">
          <strong className="text-sm text-gray-700">Pro tip:</strong>
          <p className="text-sm text-gray-600 mt-1">Also join neighborhood-specific subs within your city for hyper-local targeting</p>
        </div>
      </div>

      <div className="border-2 border-gray-200 rounded-lg p-6 hover:border-orange-600 transition-colors">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-2xl font-bold text-orange-600">3. Problem-Solution Communities</h3>
          <Users className="text-orange-600" size={28} />
        </div>
        <p className="text-gray-700 mb-3">
          <strong>Examples:</strong> r/HomeImprovement, r/personalfinance, r/productivity
        </p>
        <p className="text-gray-600 mb-3">
          People come here with specific problems. If your business solves those problems, you need to be here.
        </p>
      </div>

      <div className="border-2 border-gray-200 rounded-lg p-6 hover:border-orange-600 transition-colors">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-2xl font-bold text-orange-600">4. Buyer Intent Communities</h3>
          <Users className="text-orange-600" size={28} />
        </div>
        <p className="text-gray-700 mb-3">
          <strong>Examples:</strong> r/BuyItForLife, r/SuggestALaptop, r/whichbike
        </p>
        <p className="text-gray-600 mb-3">
          These communities exist purely for purchase recommendations. High-intent buyers actively seeking advice.
        </p>
      </div>

      <div className="border-2 border-gray-200 rounded-lg p-6 hover:border-orange-600 transition-colors">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-2xl font-bold text-orange-600">5. "Ask" Communities</h3>
          <Users className="text-orange-600" size={28} />
        </div>
        <p className="text-gray-700 mb-3">
          <strong>Examples:</strong> r/AskReddit, r/NoStupidQuestions, industry-specific "Ask" subs
        </p>
        <p className="text-gray-600 mb-3">
          Massive reach potential. Answer questions related to your expertise and build authority.
        </p>
      </div>
    </div>
  </div>
);

const ProfilePage = () => (
  <div className="p-12 min-h-screen">
    <h2 className="text-4xl font-bold text-gray-800 mb-8 border-b-4 border-orange-600 pb-4">
      Reddit Profile Setup: Do This First
    </h2>
    
    <div className="mb-6 bg-red-50 border-l-4 border-red-600 p-6 rounded-r-lg">
      <p className="text-gray-700 font-semibold">
        ⚠️ Critical: Don't skip this step! A new account posting business links will get banned instantly.
      </p>
    </div>

    <div className="space-y-8">
      <div>
        <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <span className="bg-orange-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">1</span>
          Create Your Account (Day 1)
        </h3>
        <ul className="space-y-2 ml-10 text-gray-700">
          <li className="flex items-start gap-2">
            <CheckCircle className="text-orange-600 mt-1 flex-shrink-0" size={18} />
            <span>Choose a professional but approachable username (avoid obvious business names)</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="text-orange-600 mt-1 flex-shrink-0" size={18} />
            <span>Add a profile picture (professional or relatable, not a logo)</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="text-orange-600 mt-1 flex-shrink-0" size={18} />
            <span>Write a bio that mentions your expertise without being salesy</span>
          </li>
        </ul>
      </div>

      <div>
        <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <span className="bg-orange-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">2</span>
          Build Karma (Week 1-2)
        </h3>
        <div className="ml-10 space-y-4">
          <p className="text-gray-700">
            <strong>Karma is your credibility score.</strong> You need at least 50-100 karma before posting business-related content.
          </p>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="font-semibold mb-2">How to earn karma quickly:</p>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>• Leave helpful comments on posts in your target subreddits</li>
              <li>• Answer questions people are asking</li>
              <li>• Share your genuine experience (not promotional)</li>
              <li>• Post in r/AskReddit or popular hobby subreddits</li>
            </ul>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <span className="bg-orange-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">3</span>
          Join Your Target Communities (Week 1)
        </h3>
        <ul className="space-y-2 ml-10 text-gray-700">
          <li className="flex items-start gap-2">
            <CheckCircle className="text-orange-600 mt-1 flex-shrink-0" size={18} />
            <span>Join 10-15 relevant subreddits</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="text-orange-600 mt-1 flex-shrink-0" size={18} />
            <span>Read the rules of each community (critical!)</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="text-orange-600 mt-1 flex-shrink-0" size={18} />
            <span>Observe the tone and style of successful posts</span>
          </li>
        </ul>
      </div>

      <div>
        <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <span className="bg-orange-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">4</span>
          Engage Authentically (Ongoing)
        </h3>
        <div className="ml-10 bg-orange-50 p-6 rounded-lg">
          <p className="text-gray-700 mb-3">
            <strong>The 80/20 Rule:</strong>
          </p>
          <ul className="space-y-2 text-gray-700">
            <li>• 80% of your activity should be helpful, non-promotional engagement</li>
            <li>• 20% can include subtle mentions of your business or expertise</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

const Templates1Page = () => (
  <div className="p-12 min-h-screen">
    <h2 className="text-4xl font-bold text-gray-800 mb-8 border-b-4 border-orange-600 pb-4">
      7 Post Templates That Drive Traffic (Part 1)
    </h2>
    
    <div className="space-y-8">
      <div className="border-2 border-orange-600 rounded-lg p-6 bg-orange-50">
        <h3 className="text-2xl font-bold text-orange-800 mb-4">
          Template #1: The Experience Share
        </h3>
        <div className="bg-white p-6 rounded-lg mb-4">
          <p className="text-sm text-gray-500 mb-2">Body Structure:</p>
          <div className="space-y-3 text-gray-700">
            <p><strong>Methodology:</strong> How you gathered the data</p>
            <p><strong>Finding 1:</strong> Surprising insight with stats</p>
            <p><strong>Finding 2-3:</strong> Additional patterns you noticed</p>
            <p><strong>Takeaway:</strong> What this means for readers</p>
            <p><strong>Action:</strong> One thing they should do based on this</p>
          </div>
        </div>
        <div className="bg-green-50 border-l-4 border-green-600 p-4 rounded-r">
          <p className="text-sm font-semibold text-green-800">Why it works:</p>
          <p className="text-sm text-gray-700">Original research gets massive engagement and backlinks. Positions you as an authority.</p>
        </div>
      </div>

      <div className="border-2 border-orange-600 rounded-lg p-6 bg-orange-50">
        <h3 className="text-2xl font-bold text-orange-800 mb-4">
          Template #5: The Question Post
        </h3>
        <div className="bg-white p-6 rounded-lg mb-4">
          <p className="text-sm text-gray-500 mb-2">Example Title:</p>
          <p className="font-semibold text-lg mb-4">
            "Looking for [service] in [city]. What actually matters when choosing?"
          </p>
          <p className="text-sm text-gray-500 mb-2">Body Structure:</p>
          <div className="space-y-3 text-gray-700">
            <p><strong>Context:</strong> Your specific situation</p>
            <p><strong>Criteria:</strong> What you're looking for</p>
            <p><strong>Confusion:</strong> Where you need help deciding</p>
            <p><strong>Ask:</strong> Specific questions to the community</p>
          </div>
        </div>
        <div className="bg-green-50 border-l-4 border-green-600 p-4 rounded-r">
          <p className="text-sm font-semibold text-green-800">Why it works:</p>
          <p className="text-sm text-gray-700">Can be answered by you (or others) with recommendations. Creates natural opportunities for mentions.</p>
        </div>
      </div>

      <div className="border-2 border-orange-600 rounded-lg p-6 bg-orange-50">
        <h3 className="text-2xl font-bold text-orange-800 mb-4">
          Template #6: The Resource List
        </h3>
        <div className="bg-white p-6 rounded-lg mb-4">
          <p className="text-sm text-gray-500 mb-2">Example Title:</p>
          <p className="font-semibold text-lg mb-4">
            "Ultimate list of [tools/resources/services] for [audience] (Free + Paid)"
          </p>
          <p className="text-sm text-gray-500 mb-2">Body Structure:</p>
          <div className="space-y-3 text-gray-700">
            <p><strong>Intro:</strong> "I've been in [industry] for X years..."</p>
            <p><strong>Free options:</strong> List 5-7 with brief descriptions</p>
            <p><strong>Paid options:</strong> List 3-5 with use cases</p>
            <p><strong>Your pick:</strong> "Personally, I use X because..."</p>
            <p><strong>Update:</strong> "Will keep this updated, drop suggestions below"</p>
          </div>
        </div>
        <div className="bg-green-50 border-l-4 border-green-600 p-4 rounded-r">
          <p className="text-sm font-semibold text-green-800">Why it works:</p>
          <p className="text-sm text-gray-700">Resource lists get bookmarked and shared. Great for SEO longevity.</p>
        </div>
      </div>

      <div className="border-2 border-orange-600 rounded-lg p-6 bg-orange-50">
        <h3 className="text-2xl font-bold text-orange-800 mb-4">
          Template #7: The AMA (Ask Me Anything)
        </h3>
        <div className="bg-white p-6 rounded-lg mb-4">
          <p className="text-sm text-gray-500 mb-2">Example Title:</p>
          <p className="font-semibold text-lg mb-4">
            "I've run a [business type] for 10 years. AMA about [topic]"
          </p>
          <p className="text-sm text-gray-500 mb-2">Body Structure:</p>
          <div className="space-y-3 text-gray-700">
            <p><strong>Credentials:</strong> Brief background establishing expertise</p>
            <p><strong>Proof:</strong> Optional - screenshot, verification</p>
            <p><strong>Invite:</strong> "Happy to answer any questions you have"</p>
            <p><strong>Response:</strong> Answer every question thoroughly and quickly</p>
          </div>
        </div>
        <div className="bg-green-50 border-l-4 border-green-600 p-4 rounded-r">
          <p className="text-sm font-semibold text-green-800">Why it works:</p>
          <p className="text-sm text-gray-700">Establishes you as the expert. Generates massive engagement and builds community trust.</p>
        </div>
      </div>
    </div>
  </div>
);

const RoadmapPage = () => (
  <div className="p-12 min-h-screen">
    <h2 className="text-4xl font-bold text-gray-800 mb-8 border-b-4 border-orange-600 pb-4">
      How to Rank on Google Using Reddit in 30 Days
    </h2>
    
    <div className="mb-6 bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
      <p className="text-gray-700">
        This is your step-by-step execution plan. Follow this timeline and you'll see results.
      </p>
    </div>

    <div className="space-y-6">
      <div className="border-l-4 border-orange-600 pl-6">
        <h3 className="text-2xl font-bold mb-3">Week 1: Foundation</h3>
        <div className="space-y-2 text-gray-700">
          <div className="flex items-start gap-3">
            <div className="bg-orange-600 text-white px-2 py-1 rounded text-xs font-semibold mt-1">Day 1</div>
            <div>
              <p className="font-semibold">Create & optimize your Reddit account</p>
              <p className="text-sm text-gray-600">Professional username, profile picture, bio</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="bg-orange-600 text-white px-2 py-1 rounded text-xs font-semibold mt-1">Day 2-3</div>
            <div>
              <p className="font-semibold">Research and join 10-15 target subreddits</p>
              <p className="text-sm text-gray-600">Read rules, observe top posts, understand the culture</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="bg-orange-600 text-white px-2 py-1 rounded text-xs font-semibold mt-1">Day 4-7</div>
            <div>
              <p className="font-semibold">Build karma through genuine engagement</p>
              <p className="text-sm text-gray-600">Leave 20-30 helpful comments, answer questions, participate authentically</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-l-4 border-orange-600 pl-6">
        <h3 className="text-2xl font-bold mb-3">Week 2: Establish Presence</h3>
        <div className="space-y-2 text-gray-700">
          <div className="flex items-start gap-3">
            <div className="bg-orange-600 text-white px-2 py-1 rounded text-xs font-semibold mt-1">Day 8-10</div>
            <div>
              <p className="font-semibold">Continue building karma (target 50-100 total)</p>
              <p className="text-sm text-gray-600">Focus on your target subreddits, become a recognized contributor</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="bg-orange-600 text-white px-2 py-1 rounded text-xs font-semibold mt-1">Day 11-14</div>
            <div>
              <p className="font-semibold">Create your first value-add post</p>
              <p className="text-sm text-gray-600">Use Template #1 or #3, keep it 100% helpful with zero self-promotion</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-l-4 border-orange-600 pl-6">
        <h3 className="text-2xl font-bold mb-3">Week 3: Start Ranking</h3>
        <div className="space-y-2 text-gray-700">
          <div className="flex items-start gap-3">
            <div className="bg-orange-600 text-white px-2 py-1 rounded text-xs font-semibold mt-1">Day 15-17</div>
            <div>
              <p className="font-semibold">Post strategic content in 2-3 subreddits</p>
              <p className="text-sm text-gray-600">Focus on topics people Google: "best [service] in [city]"</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="bg-orange-600 text-white px-2 py-1 rounded text-xs font-semibold mt-1">Day 18-21</div>
            <div>
              <p className="font-semibold">Engage with your posts and others</p>
              <p className="text-sm text-gray-600">Respond to every comment on your posts, continue helping in other threads</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-l-4 border-orange-600 pl-6">
        <h3 className="text-2xl font-bold mb-3">Week 4: Scale & Optimize</h3>
        <div className="space-y-2 text-gray-700">
          <div className="flex items-start gap-3">
            <div className="bg-orange-600 text-white px-2 py-1 rounded text-xs font-semibold mt-1">Day 22-25</div>
            <div>
              <p className="font-semibold">Create comparison and data posts</p>
              <p className="text-sm text-gray-600">Use Templates #2 and #4 targeting high-volume search terms</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="bg-orange-600 text-white px-2 py-1 rounded text-xs font-semibold mt-1">Day 26-28</div>
            <div>
              <p className="font-semibold">Check Google rankings</p>
              <p className="text-sm text-gray-600">Search "[your topic] reddit" and see where your posts appear</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="bg-orange-600 text-white px-2 py-1 rounded text-xs font-semibold mt-1">Day 29-30</div>
            <div>
              <p className="font-semibold">Double down on what works</p>
              <p className="text-sm text-gray-600">Analyze which posts got traction, create similar content</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-lg mt-8">
        <h3 className="font-bold text-xl mb-3 text-green-800">
          📊 Expected Results After 30 Days
        </h3>
        <ul className="space-y-2 text-gray-700">
          <li>• 3-5 posts ranking on Google's first page</li>
          <li>• 100-200 karma established credibility</li>
          <li>• Steady stream of organic traffic to your business</li>
          <li>• Authority established in your niche communities</li>
        </ul>
      </div>
    </div>
  </div>
);

const MistakesPage = () => (
  <div className="p-12 min-h-screen">
    <h2 className="text-4xl font-bold text-gray-800 mb-8 border-b-4 border-orange-600 pb-4">
      7 Critical Mistakes to Avoid
    </h2>
    
    <div className="space-y-6">
      <div className="bg-red-50 border-2 border-red-300 rounded-lg p-6">
        <h3 className="text-xl font-bold text-red-800 mb-3 flex items-center gap-2">
          <span className="text-2xl">❌</span> Mistake #1: Posting Too Soon
        </h3>
        <p className="text-gray-700 mb-2">
          <strong>What happens:</strong> Your account gets shadowbanned or posts get removed.
        </p>
        <p className="text-gray-700">
          <strong>The fix:</strong> Wait until you have 50+ karma and your account is at least 7 days old before posting promotional content.
        </p>
      </div>

      <div className="bg-red-50 border-2 border-red-300 rounded-lg p-6">
        <h3 className="text-xl font-bold text-red-800 mb-3 flex items-center gap-2">
          <span className="text-2xl">❌</span> Mistake #2: Being Obviously Promotional
        </h3>
        <p className="text-gray-700 mb-2">
          <strong>What happens:</strong> Community downvotes you into oblivion and you get banned.
        </p>
        <p className="text-gray-700">
          <strong>The fix:</strong> Lead with value. Your business should be mentioned naturally in context, never as the main point.
        </p>
      </div>

      <div className="bg-red-50 border-2 border-red-300 rounded-lg p-6">
        <h3 className="text-xl font-bold text-red-800 mb-3 flex items-center gap-2">
          <span className="text-2xl">❌</span> Mistake #3: Ignoring Subreddit Rules
        </h3>
        <p className="text-gray-700 mb-2">
          <strong>What happens:</strong> Instant post removal and possible ban.
        </p>
        <p className="text-gray-700">
          <strong>The fix:</strong> Read the rules of EVERY subreddit before posting. Some ban self-promotion entirely, others allow it on certain days.
        </p>
      </div>

      <div className="bg-red-50 border-2 border-red-300 rounded-lg p-6">
        <h3 className="text-xl font-bold text-red-800 mb-3 flex items-center gap-2">
          <span className="text-2xl">❌</span> Mistake #4: Using Your Business Name as Username
        </h3>
        <p className="text-gray-700 mb-2">
          <strong>What happens:</strong> Screams "corporate shill" and reduces trust.
        </p>
        <p className="text-gray-700">
          <strong>The fix:</strong> Use a personal-sounding username. You're a person who happens to work in this industry, not a business account.
        </p>
      </div>

      <div className="bg-red-50 border-2 border-red-300 rounded-lg p-6">
        <h3 className="text-xl font-bold text-red-800 mb-3 flex items-center gap-2">
          <span className="text-2xl">❌</span> Mistake #5: Posting the Same Content Everywhere
        </h3>
        <p className="text-gray-700 mb-2">
          <strong>What happens:</strong> Reddit's spam filters catch you and ban your account site-wide.
        </p>
        <p className="text-gray-700">
          <strong>The fix:</strong> Customize each post for each community. Different angle, different wording, different value proposition.
        </p>
      </div>

      <div className="bg-red-50 border-2 border-red-300 rounded-lg p-6">
        <h3 className="text-xl font-bold text-red-800 mb-3 flex items-center gap-2">
          <span className="text-2xl">❌</span> Mistake #6: Not Engaging After Posting
        </h3>
        <p className="text-gray-700 mb-2">
          <strong>What happens:</strong> Your post dies in "new" and never gets traction.
        </p>
        <p className="text-gray-700">
          <strong>The fix:</strong> Respond to EVERY comment within the first hour. Reddit's algorithm rewards engagement.
        </p>
      </div>

      <div className="bg-red-50 border-2 border-red-300 rounded-lg p-6">
        <h3 className="text-xl font-bold text-red-800 mb-3 flex items-center gap-2">
          <span className="text-2xl">❌</span> Mistake #7: Giving Up After One Post
        </h3>
        <p className="text-gray-700 mb-2">
          <strong>What happens:</strong> You miss out on the compounding benefits of consistent presence.
        </p>
        <p className="text-gray-700">
          <strong>The fix:</strong> Commit to posting valuable content 2-3 times per week for at least 90 days. Success builds over time.
        </p>
      </div>
    </div>
  </div>
);

const CaseStudiesPage = () => (
  <div className="p-12 min-h-screen">
    <h2 className="text-4xl font-bold text-gray-800 mb-8 border-b-4 border-orange-600 pb-4">
      Real Success Stories
    </h2>
    
    <div className="space-y-8">
      <div className="border-2 border-green-600 rounded-lg p-6 bg-green-50">
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-2xl font-bold text-green-800">Case Study #1: Local Service Business</h3>
          <div className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">$15k Revenue</div>
        </div>
        <div className="space-y-3 text-gray-700">
          <p><strong>Industry:</strong> HVAC Repair (Denver, CO)</p>
          <p><strong>Strategy:</strong> Posted in r/Denver answering HVAC questions during peak summer months</p>
          <p><strong>Key Post:</strong> "HVAC tech here - 5 things to check before calling for repair (could save you $200)"</p>
          <p><strong>Results:</strong></p>
          <ul className="ml-6 space-y-1">
            <li>• Post ranked #1 on Google for "HVAC repair Denver reddit"</li>
            <li>• 47 upvotes, 89 comments</li>
            <li>• 12 qualified leads in first month</li>
            <li>• $15,000 in revenue from Reddit traffic alone</li>
          </ul>
          <div className="bg-white p-4 rounded mt-4">
            <p className="font-semibold text-sm mb-2">💡 Key Takeaway:</p>
            <p className="text-sm">He didn't sell anything in the post. He gave away valuable troubleshooting tips, and people naturally asked for his services in the comments.</p>
          </div>
        </div>
      </div>

      <div className="border-2 border-blue-600 rounded-lg p-6 bg-blue-50">
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-2xl font-bold text-blue-800">Case Study #2: SaaS Product</h3>
          <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">487 Sign-ups</div>
        </div>
        <div className="space-y-3 text-gray-700">
          <p><strong>Industry:</strong> Project Management Tool for Freelancers</p>
          <p><strong>Strategy:</strong> Created comparison posts in r/freelance and r/entrepreneur</p>
          <p><strong>Key Post:</strong> "I tested 15 project management tools as a freelancer. Here's the honest breakdown."</p>
          <p><strong>Results:</strong></p>
          <ul className="ml-6 space-y-1">
            <li>• Ranked #2 for "best project management for freelancers reddit"</li>
            <li>• 234 upvotes across 3 related subreddits</li>
            <li>• 487 sign-ups in 60 days</li>
            <li>• 43 converted to paid customers ($2,580 MRR)</li>
          </ul>
          <div className="bg-white p-4 rounded mt-4">
            <p className="font-semibold text-sm mb-2">💡 Key Takeaway:</p>
            <p className="text-sm">She included her own tool as one of 15 options, not the only option. Honest comparison builds trust.</p>
          </div>
        </div>
      </div>

      <div className="border-2 border-purple-600 rounded-lg p-6 bg-purple-50">
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-2xl font-bold text-purple-800">Case Study #3: E-commerce Store</h3>
          <div className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">$8k Month 1</div>
        </div>
        <div className="space-y-3 text-gray-700">
          <p><strong>Industry:</strong> Sustainable Home Goods</p>
          <p><strong>Strategy:</strong> Posted detailed guides in r/ZeroWaste and r/Anticonsumption</p>
          <p><strong>Key Post:</strong> "I quit Amazon and found eco-friendly alternatives for 50 common household items"</p>
          <p><strong>Results:</strong></p>
          <ul className="ml-6 space-y-1">
            <li>• 1.2k upvotes, post went viral in community</li>
            <li>• Ranked for multiple "[product] alternative reddit" searches</li>
            <li>• 8,000+ website visitors in first month</li>
            <li>• $8,200 in sales from Reddit traffic</li>
          </ul>
          <div className="bg-white p-4 rounded mt-4">
            <p className="font-semibold text-sm mb-2">💡 Key Takeaway:</p>
            <p className="text-sm">The post was genuinely helpful, listing competitors too. Their store was mentioned as "full disclosure, this is my shop" at the end.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const ToolsPage = () => (
  <div className="p-12 min-h-screen">
    <h2 className="text-4xl font-bold text-gray-800 mb-8 border-b-4 border-orange-600 pb-4">
      Tools & Resources
    </h2>
    
    <div className="space-y-6">
      <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
        <h3 className="text-xl font-bold mb-4 text-blue-800">Reddit Research & Analytics</h3>
        <div className="space-y-3">
          <div className="bg-white p-4 rounded">
            <p className="font-semibold">Subreddit Stats</p>
            <p className="text-sm text-gray-600 mt-1">subredditstats.com - Find trending subreddits and track growth</p>
          </div>
          <div className="bg-white p-4 rounded">
            <p className="font-semibold">Later for Reddit</p>
            <p className="text-sm text-gray-600 mt-1">laterforreddit.com - Schedule posts for optimal timing (free)</p>
          </div>
          <div className="bg-white p-4 rounded">
            <p className="font-semibold">Reddit Keyword Research Tool</p>
            <p className="text-sm text-gray-600 mt-1">keyworddit.com - Find what people are searching for in specific subreddits</p>
          </div>
        </div>
      </div>

      <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-lg">
        <h3 className="text-xl font-bold mb-4 text-green-800">Rank Tracking</h3>
        <div className="space-y-3">
          <div className="bg-white p-4 rounded">
            <p className="font-semibold">Google Search Console</p>
            <p className="text-sm text-gray-600 mt-1">Free - Track which Reddit posts are ranking for what keywords</p>
          </div>
          <div className="bg-white p-4 rounded">
            <p className="font-semibold">Manual Check</p>
            <p className="text-sm text-gray-600 mt-1">Search "[your keyword] reddit" in incognito mode weekly</p>
          </div>
        </div>
      </div>

      <div className="bg-purple-50 border-l-4 border-purple-600 p-6 rounded-r-lg">
        <h3 className="text-xl font-bold mb-4 text-purple-800">Content Creation</h3>
        <div className="space-y-3">
          <div className="bg-white p-4 rounded">
            <p className="font-semibold">ChatGPT / Claude</p>
            <p className="text-sm text-gray-600 mt-1">Draft post frameworks, but always personalize and add real experience</p>
          </div>
          <div className="bg-white p-4 rounded">
            <p className="font-semibold">Grammarly</p>
            <p className="text-sm text-gray-600 mt-1">Free - Ensure your posts are clear and error-free</p>
          </div>
          <div className="bg-white p-4 rounded">
            <p className="font-semibold">Hemingway Editor</p>
            <p className="text-sm text-gray-600 mt-1">Free - Make your writing clear and readable</p>
          </div>
        </div>
      </div>

      <div className="bg-orange-50 border-l-4 border-orange-600 p-6 rounded-r-lg">
        <h3 className="text-xl font-bold mb-4 text-orange-800">Monitoring & Alerts</h3>
        <div className="space-y-3">
          <div className="bg-white p-4 rounded">
            <p className="font-semibold">Reddit Notifications</p>
            <p className="text-sm text-gray-600 mt-1">Turn on mobile notifications for comment replies</p>
          </div>
          <div className="bg-white p-4 rounded">
            <p className="font-semibold">F5Bot</p>
            <p className="text-sm text-gray-600 mt-1">f5bot.com - Get email alerts when keywords are mentioned on Reddit (free)</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const ConclusionPage = () => (
  <div className="p-12 min-h-screen">
    <h2 className="text-4xl font-bold text-gray-800 mb-8 border-b-4 border-orange-600 pb-4">
      Your Next Steps
    </h2>
    
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-orange-100 to-red-100 p-8 rounded-lg">
        <h3 className="text-2xl font-bold mb-4">The Opportunity Window Is Closing</h3>
        <p className="text-gray-700 text-lg mb-4">
          Right now, Reddit SEO is still relatively unknown. Most businesses aren't doing this. But that won't last forever.
        </p>
        <p className="text-gray-700 text-lg">
          The businesses that move NOW will establish authority and rankings that will be hard for latecomers to compete with.
        </p>
      </div>

      <div className="bg-white border-2 border-orange-600 rounded-lg p-8">
        <h3 className="text-2xl font-bold mb-6 text-center">Your 7-Day Quick Start</h3>
        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <div className="bg-orange-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
            <div>
              <p className="font-semibold">Today: Create your Reddit account</p>
              <p className="text-sm text-gray-600">Professional username, photo, bio</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="bg-orange-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
            <div>
              <p className="font-semib2">Example Title:</p>
          <p className="font-semibold text-lg mb-4">
            "I spent $10k on [service/product] last year. Here's what actually worked."
          </p>
          <p className="text-sm text-gray-500 mb-2">Body Structure:</p>
          <div className="space-y-3 text-gray-700">
            <p><strong>Intro:</strong> "Like many of you, I was struggling with [problem]..."</p>
            <p><strong>Journey:</strong> Share 3-4 things you tried (including competitors)</p>
            <p><strong>Solution:</strong> Explain what finally worked and why</p>
            <p><strong>Results:</strong> Specific metrics or outcomes</p>
            <p><strong>CTA:</strong> "Happy to answer questions in the comments"</p>
          </div>
        </div>
        <div className="bg-green-50 border-l-4 border-green-600 p-4 rounded-r">
          <p className="text-sm font-semibold text-green-800">Why it works:</p>
          <p className="text-sm text-gray-700">You're sharing genuine experience, not selling. People trust personal stories.</p>
        </div>
      </div>

      <div className="border-2 border-orange-600 rounded-lg p-6 bg-orange-50">
        <h3 className="text-2xl font-bold text-orange-800 mb-4">
          Template #2: The Comparison Post
        </h3>
        <div className="bg-white p-6 rounded-lg mb-4">
          <p className="text-sm text-gray-500 mb-2">Example Title:</p>
          <p className="font-semibold text-lg mb-4">
            "[Option A] vs [Option B] vs [Option C]: Which one is actually worth it?"
          </p>
          <p className="text-sm text-gray-500 mb-2">Body Structure:</p>
          <div className="space-y-3 text-gray-700">
            <p><strong>Setup:</strong> "I tested all three so you don't have to..."</p>
            <p><strong>Criteria:</strong> List what you evaluated (price, quality, support, etc.)</p>
            <p><strong>Breakdown:</strong> Fair assessment of each option</p>
            <p><strong>Verdict:</strong> "For most people, I'd recommend..."</p>
            <p><strong>Caveat:</strong> "But if you need X, go with Y instead"</p>
          </div>
        </div>
        <div className="bg-green-50 border-l-4 border-green-600 p-4 rounded-r">
          <p className="text-sm font-semibold text-green-800">Why it works:</p>
          <p className="text-sm text-gray-700">Comparison posts rank incredibly well and position you as an unbiased expert.</p>
        </div>
      </div>

      <div className="border-2 border-orange-600 rounded-lg p-6 bg-orange-50">
        <h3 className="text-2xl font-bold text-orange-800 mb-4">
          Template #3: The Mistake Post
        </h3>
        <div className="bg-white p-6 rounded-lg mb-4">
          <p className="text-sm text-gray-500 mb-2">Example Title:</p>
          <p className="font-semibold text-lg mb-4">
            "5 expensive mistakes I made with [topic] (so you don't have to)"
          </p>
          <p className="text-sm text-gray-500 mb-2">Body Structure:</p>
          <div className="space-y-3 text-gray-700">
            <p><strong>Hook:</strong> "This cost me $X and 6 months of frustration..."</p>
            <p><strong>Mistake 1-5:</strong> Each with what happened and lesson learned</p>
            <p><strong>What to do instead:</strong> Actionable alternative for each</p>
            <p><strong>Close:</strong> "Hope this saves someone else the headache"</p>
          </div>
        </div>
        <div className="bg-green-50 border-l-4 border-green-600 p-4 rounded-r">
          <p className="text-sm font-semibold text-green-800">Why it works:</p>
          <p className="text-sm text-gray-700">Vulnerability builds trust. People love learning from others' mistakes.</p>
        </div>
      </div>
    </div>
  </div>
);

const Templates2Page = () => (
  <div className="p-12 min-h-screen">
    <h2 className="text-4xl font-bold text-gray-800 mb-8 border-b-4 border-orange-600 pb-4">
      7 Post Templates That Drive Traffic (Part 2)
    </h2>
    
    <div className="space-y-8">
      <div className="border-2 border-orange-600 rounded-lg p-6 bg-orange-50">
        <h3 className="text-2xl font-bold text-orange-800 mb-4">
          Template #4: The Data Post
        </h3>
        <div className="bg-white p-6 rounded-lg mb-4">
          <p className="text-sm text-gray-500 mb-2">Example Title:</p>
          <p className="font-semibold text-lg mb-4">
            "I analyzed 100 [businesses/cases/examples]. Here's what the successful ones did differently."
          </p>
          <p className="text-sm text-gray-500 mb-import React, { useState } from 'react';
import { FileDown, CheckCircle, TrendingUp, Users, Target, Clock, DollarSign, ChevronRight } from 'lucide-react';

const RedditSEOPlaybook = () => {
  const [currentSection, setCurrentSection] = useState('cover');

  const sections = [
    { id: 'cover', name: 'Cover Page' },
    { id: 'stats', name: 'Performance Stats' },
    { id: 'why', name: 'Why Reddit SEO' },
    { id: 'communities', name: '5 Communities' },
    { id: 'profile', name: 'Profile Setup' },
    { id: 'templates1', name: 'Templates 1-3' },
    { id: 'templates2', name: 'Templates 4-7' },
    { id: 'roadmap', name: '30-Day Roadmap' },
    { id: 'mistakes', name: 'Avoid These Mistakes' },
    { id: 'case-studies', name: 'Case Studies' },
    { id: 'tools', name: 'Tools & Resources' },
    { id: 'conclusion', name: 'Next Steps' }
  ];

  const generatePDF = () => {
    window.print();
  };

  const renderSection = () => {
    switch(currentSection) {
      case 'cover':
        return <CoverPage />;
      case 'stats':
        return <StatsPage />;
      case 'why':
        return <WhyRedditPage />;
      case 'communities':
        return <CommunitiesPage />;
      case 'profile':
        return <ProfilePage />;
      case 'templates1':
        return <Templates1Page />;
      case 'templates2':
        return <Templates2Page />;
      case 'roadmap':
        return <RoadmapPage />;
      case 'mistakes':
        return <MistakesPage />;
      case 'case-studies':
        return <CaseStudiesPage />;
      case 'tools':
        return <ToolsPage />;
      case 'conclusion':
        return <ConclusionPage />;
      default:
        return <CoverPage />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      {/* Navigation */}
      <div className="print:hidden bg-white border-b shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold text-orange-600">The Reddit SEO Playbook</h1>
            <button
              onClick={generatePDF}
              className="flex items-center gap-2 bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition-colors shadow"
            >
              <FileDown size={18} />
              Download PDF
            </button>
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setCurrentSection(section.id)}
                className={`px-4 py-2 rounded-lg whitespace-nowrap text-sm font-medium transition-colors ${
                  currentSection === section.id
                    ? 'bg-orange-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {section.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto p-8">
        <div className="bg-white shadow-2xl print:shadow-none min-h-screen">
          {renderSection()}
        </div>
      </div>
    </div>
  );
};

const CoverPage = () => (
  <div className="p-12 bg-gradient-to-br from-orange-600 to-red-600 text-white min-h-screen flex flex-col justify-center">
    <div className="text-6xl font-bold mb-4">📊</div>
    <h1 className="text-5xl font-bold mb-6 leading-tight">
      The Reddit SEO Playbook
    </h1>
    <p className="text-2xl mb-8 opacity-90">
      How to Rank Your Business on Google Using Reddit in 30 Days
    </p>
    
    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8">
      <h3 className="text-xl font-semibold mb-4">Why This Matters Now:</h3>
      <div className="text-3xl font-bold mb-2">1,328% Increase</div>
      <p className="text-lg">
        Reddit's visibility on Google from July 2023 to April 2024
      </p>
    </div>

    <div className="grid grid-cols-3 gap-4 text-center">
      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
        <Clock className="mx-auto mb-2" size={24} />
        <div className="font-semibold">Build Time</div>
        <div className="text-sm opacity-90">3-4 hours</div>
      </div>
      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
        <DollarSign className="mx-auto mb-2" size={24} />
        <div className="font-semibold">Cost</div>
        <div className="text-sm opacity-90">$0</div>
      </div>
      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
        <Target className="mx-auto mb-2" size={24} />
        <div className="font-semibold">ROI Potential</div>
        <div className="text-sm opacity-90">Very High</div>
      </div>
    </div>
  </div>
);

const StatsPage = () => (
  <div className="p-12 min-h-screen">
    <h2 className="text-4xl font-bold text-gray-800 mb-8 border-b-4 border-orange-600 pb-4">
      Your Content Performance Snapshot
    </h2>
    
    <div className="mb-8 bg-orange-50 border-l-4 border-orange-600 p-6 rounded-r-lg">
      <p className="text-lg text-gray-700 leading-relaxed">
        Before we dive into the Reddit SEO strategy, let's look at how your content performed across different platforms. Notice anything interesting?
      </p>
    </div>

    <div className="grid grid-cols-2 gap-6 mb-8">
      <div className="bg-gradient-to-br from-gray-800 to-gray-900 text-white p-6 rounded-lg">
        <div className="text-sm opacity-75 mb-2">Twitter/X</div>
        <div className="text-4xl font-bold mb-2">79</div>
        <div className="text-sm">views</div>
      </div>
      
      <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white p-6 rounded-lg">
        <div className="text-sm opacity-75 mb-2">LinkedIn</div>
        <div className="text-4xl font-bold mb-2">65</div>
        <div className="text-sm">views</div>
      </div>
      
      <div className="bg-gradient-to-br from-pink-600 to-purple-600 text-white p-6 rounded-lg">
        <div className="text-sm opacity-75 mb-2">Instagram</div>
        <div className="text-4xl font-bold mb-2">12</div>
        <div className="text-sm">views</div>
      </div>
      
      <div className="bg-gradient-to-br from-black to-gray-900 text-white p-6 rounded-lg">
        <div className="text-sm opacity-75 mb-2">TikTok</div>
        <div className="text-4xl font-bold mb-2">203</div>
        <div className="text-sm">views</div>
      </div>
      
      <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-lg">
        <div className="text-sm opacity-75 mb-2">Facebook</div>
        <div className="text-4xl font-bold mb-2">260</div>
        <div className="text-sm">views</div>
      </div>
      
      <div className="bg-gradient-to-br from-orange-600 to-red-600 text-white p-6 rounded-lg shadow-xl transform scale-105">
        <TrendingUp className="mb-2" size={24} />
        <div className="text-sm opacity-75 mb-2">Reddit</div>
        <div className="text-5xl font-bold mb-2">1,700</div>
        <div className="text-sm">views 🚀</div>
      </div>
    </div>

    <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
      <h3 className="font-bold text-xl mb-3 text-yellow-800">
        📈 The Reddit Advantage
      </h3>
      <p className="text-gray-700 text-lg">
        Reddit outperformed all other platforms combined by <strong>2.6x</strong>. While competitors focus on traditional social media, savvy businesses are dominating search results through Reddit.
      </p>
    </div>
  </div>
);

const WhyRedditPage = () => (
  <div className="p-12 min-h-screen">
    <h2 className="text-4xl font-bold text-gray-800 mb-8 border-b-4 border-orange-600 pb-4">
      Why Reddit SEO Is The Opportunity of 2024-2025
    </h2>
    
    <div className="space-y-6">
      <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-lg">
        <h3 className="font-bold text-xl mb-3 text-red-800">
          🚨 The Problem You're Facing
        </h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Your competitors are already ranking on Google's first page for "your industry + reddit" searches. When potential customers search for recommendations, they're finding your competitors' Reddit posts, not your website.
        </p>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-start gap-2">
            <span className="text-red-600 mt-1">•</span>
            <span>Traditional SEO takes 6-12 months to show results</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-600 mt-1">•</span>
            <span>Paid ads are getting more expensive every quarter</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-600 mt-1">•</span>
            <span>Social media organic reach continues to decline</span>
          </li>
        </ul>
      </div>

      <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-lg">
        <h3 className="font-bold text-xl mb-3 text-green-800">
          ✅ The Reddit SEO Solution
        </h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Google now prioritizes Reddit content in search results. A well-crafted Reddit post can rank on page 1 within days, not months.
        </p>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-start gap-2">
            <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
            <span><strong>Fast results:</strong> Rank within 7-30 days</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
            <span><strong>Zero cost:</strong> Completely free organic traffic</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
            <span><strong>High intent traffic:</strong> People actively seeking recommendations</span>
          </li>
        </ul>
      </div>

      <div className="bg-orange-50 border-l-4 border-orange-600 p-6 rounded-r-lg">
        <h3 className="font-bold text-xl mb-3 text-orange-800">
          📊 By The Numbers
        </h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center p-4 bg-white rounded-lg shadow">
            <div className="text-3xl font-bold text-orange-600 mb-2">1,328%</div>
            <div className="text-sm text-gray-600">Google visibility increase</div>
          </div>
          <div className="text-center p-4 bg-white rounded-lg shadow">
            <div className="text-3xl font-bold text-orange-600 mb-2">850M+</div>
            <div className="text-sm text-gray-600">Monthly active users</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const CommunitiesPage = () => (
  <div className="p-12 min-h-screen">
    <h2 className="text-4xl font-bold text-gray-800 mb-8 border-b-4 border-orange-600 pb-4">
      The 5 Reddit Communities Every Business Must Join
    </h2>
    
    <div className="mb-6 bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
      <p className="text-gray-700">
        <strong>Strategy:</strong> Focus on communities where your ideal customers are actively seeking recommendations and solutions.
      </p>
    </div>

    <div className="space-y-6">
      <div className="border-2 border-gray-200 rounded-lg p-6 hover:border-orange-600 transition-colors">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-2xl font-bold text-orange-600">1. Industry-Specific Subreddits</h3>
          <Users className="text-orange-600" size={28} />
        </div>
        <p className="text-gray-700 mb-3">
          <strong>Examples:</strong> r/smallbusiness, r/entrepreneur, r/marketing, r/webdev
        </p>
        <p className="text-gray-600 mb-3">
          These are communities where professionals and business owners gather to discuss challenges and share solutions.
        </p>
        <div className="bg-gray-50 p-4 rounded">
          <strong className="text-sm text-gray-700">How to find yours:</strong>
          <p className="text-sm text-gray-600 mt-1">Search "[your industry]" or "[your service]" on Reddit and sort by member count</p>
        </div>
      </div>

      <div className="border-2 border-gray-200 rounded-lg p-6 hover:border-orange-600 transition-colors">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-2xl font-bold text-orange-600">2. Location-Based Communities</h3>
          <Users className="text-orange-600" size={28} />
        </div>
        <p className="text-gray-700 mb-3">
          <strong>Examples:</strong> r/NYC, r/LosAngeles, r/AustinTX
        </p>
        <p className="text-gray-600 mb-3">
          Local subreddits are goldmines for local businesses. Residents frequently ask for service recommendations.
        </p>
        <div className="bg-gray-50 p-4 rounded">
          <strong className="text-sm text-gray-700">Pro tip:</strong>
          <p className="text-sm text-gray-600 mt-1">Also join neighborhood-specific subs within your city for hyper-local targeting</p>
        </div>
      </div>

      <div className="border-2 border-gray-200 rounded-lg p-6 hover:border-orange-600 transition-colors">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-2xl font-bold text-orange-600">3. Problem-Solution Communities</h3>
          <Users className="text-orange-600" size={28} />
        </div>
        <p className="text-gray-700 mb-3">
          <strong>Examples:</strong> r/HomeImprovement, r/personalfinance, r/productivity
        </p>
        <p className="text-gray-600 mb-3">
          People come here with specific problems. If your business solves those problems, you need to be here.
        </p>
      </div>

      <div className="border-2 border-gray-200 rounded-lg p-6 hover:border-orange-600 transition-colors">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-2xl font-bold text-orange-600">4. Buyer Intent Communities</h3>
          <Users className="text-orange-600" size={28} />
        </div>
        <p className="text-gray-700 mb-3">
          <strong>Examples:</strong> r/BuyItForLife, r/SuggestALaptop, r/whichbike
        </p>
        <p className="text-gray-600 mb-3">
          These communities exist purely for purchase recommendations. High-intent buyers actively seeking advice.
        </p>
      </div>

      <div className="border-2 border-gray-200 rounded-lg p-6 hover:border-orange-600 transition-colors">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-2xl font-bold text-orange-600">5. "Ask" Communities</h3>
          <Users className="text-orange-600" size={28} />
        </div>
        <p className="text-gray-700 mb-3">
          <strong>Examples:</strong> r/AskReddit, r/NoStupidQuestions, industry-specific "Ask" subs
        </p>
        <p className="text-gray-600 mb-3">
          Massive reach potential. Answer questions related to your expertise and build authority.
        </p>
      </div>
    </div>
  </div>
);

const ProfilePage = () => (
  <div className="p-12 min-h-screen">
    <h2 className="text-4xl font-bold text-gray-800 mb-8 border-b-4 border-orange-600 pb-4">
      Reddit Profile Setup: Do This First
    </h2>
    
    <div className="mb-6 bg-red-50 border-l-4 border-red-600 p-6 rounded-r-lg">
      <p className="text-gray-700 font-semibold">
        ⚠️ Critical: Don't skip this step! A new account posting business links will get banned instantly.
      </p>
    </div>

    <div className="space-y-8">
      <div>
        <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <span className="bg-orange-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">1</span>
          Create Your Account (Day 1)
        </h3>
        <ul className="space-y-2 ml-10 text-gray-700">
          <li className="flex items-start gap-2">
            <CheckCircle className="text-orange-600 mt-1 flex-shrink-0" size={18} />
            <span>Choose a professional but approachable username (avoid obvious business names)</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="text-orange-600 mt-1 flex-shrink-0" size={18} />
            <span>Add a profile picture (professional or relatable, not a logo)</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="text-orange-600 mt-1 flex-shrink-0" size={18} />
            <span>Write a bio that mentions your expertise without being salesy</span>
          </li>
        </ul>
      </div>

      <div>
        <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <span className="bg-orange-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">2</span>
          Build Karma (Week 1-2)
        </h3>
        <div className="ml-10 space-y-4">
          <p className="text-gray-700">
            <strong>Karma is your credibility score.</strong> You need at least 50-100 karma before posting business-related content.
          </p>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="font-semibold mb-2">How to earn karma quickly:</p>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>• Leave helpful comments on posts in your target subreddits</li>
              <li>• Answer questions people are asking</li>
              <li>• Share your genuine experience (not promotional)</li>
              <li>• Post in r/AskReddit or popular hobby subreddits</li>
            </ul>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <span className="bg-orange-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">3</span>
          Join Your Target Communities (Week 1)
        </h3>
        <ul className="space-y-2 ml-10 text-gray-700">
          <li className="flex items-start gap-2">
            <CheckCircle className="text-orange-600 mt-1 flex-shrink-0" size={18} />
            <span>Join 10-15 relevant subreddits</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="text-orange-600 mt-1 flex-shrink-0" size={18} />
            <span>Read the rules of each community (critical!)</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="text-orange-600 mt-1 flex-shrink-0" size={18} />
            <span>Observe the tone and style of successful posts</span>
          </li>
        </ul>
      </div>

      <div>
        <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <span className="bg-orange-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">4</span>
          Engage Authentically (Ongoing)
        </h3>
        <div className="ml-10 bg-orange-50 p-6 rounded-lg">
          <p className="text-gray-700 mb-3">
            <strong>The 80/20 Rule:</strong>
          </p>
          <ul className="space-y-2 text-gray-700">
            <li>• 80% of your activity should be helpful, non-promotional engagement</li>
            <li>• 20% can include subtle mentions of your business or expertise</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

const Templates1Page = () => (
  <div className="p-12 min-h-screen">
    <h2 className="text-4xl font-bold text-gray-800 mb-8 border-b-4 border-orange-600 pb-4">
      7 Post Templates That Drive Traffic (Part 1)
    </h2>
    
    <div className="space-y-8">
      <div className="border-2 border-orange-600 rounded-lg p-6 bg-orange-50">
        <h3 className="text-2xl font-bold text-orange-800 mb-4">
          Template #1: The Experience Share
        </h3>
        <div className="bg-white p-6 rounded-lg mb-4">
          <p className="text-sm text-gray-500 mb-2">Body Structure:</p>
          <div className="space-y-3 text-gray-700">
            <p><strong>Methodology:</strong> How you gathered the data</p>
            <p><strong>Finding 1:</strong> Surprising insight with stats</p>
            <p><strong>Finding 2-3:</strong> Additional patterns you noticed</p>
            <p><strong>Takeaway:</strong> What this means for readers</p>
            <p><strong>Action:</strong> One thing they should do based on this</p>
          </div>
        </div>
        <div className="bg-green-50 border-l-4 border-green-600 p-4 rounded-r">
          <p className="text-sm font-semibold text-green-800">Why it works:</p>
          <p className="text-sm text-gray-700">Original research gets massive engagement and backlinks. Positions you as an authority.</p>
        </div>
      </div>

      <div className="border-2 border-orange-600 rounded-lg p-6 bg-orange-50">
        <h3 className="text-2xl font-bold text-orange-800 mb-4">
          Template #5: The Question Post
        </h3>
        <div className="bg-white p-6 rounded-lg mb-4">
          <p className="text-sm text-gray-500 mb-2">Example Title:</p>
          <p className="font-semibold text-lg mb-4">
            "Looking for [service] in [city]. What actually matters when choosing?"
          </p>
          <p className="text-sm text-gray-500 mb-2">Body Structure:</p>
          <div className="space-y-3 text-gray-700">
            <p><strong>Context:</strong> Your specific situation</p>
            <p><strong>Criteria:</strong> What you're looking for</p>
            <p><strong>Confusion:</strong> Where you need help deciding</p>
            <p><strong>Ask:</strong> Specific questions to the community</p>
          </div>
        </div>
        <div className="bg-green-50 border-l-4 border-green-600 p-4 rounded-r">
          <p className="text-sm font-semibold text-green-800">Why it works:</p>
          <p className="text-sm text-gray-700">Can be answered by you (or others) with recommendations. Creates natural opportunities for mentions.</p>
        </div>
      </div>

      <div className="border-2 border-orange-600 rounded-lg p-6 bg-orange-50">
        <h3 className="text-2xl font-bold text-orange-800 mb-4">
          Template #6: The Resource List
        </h3>
        <div className="bg-white p-6 rounded-lg mb-4">
          <p className="text-sm text-gray-500 mb-2">Example Title:</p>
          <p className="font-semibold text-lg mb-4">
            "Ultimate list of [tools/resources/services] for [audience] (Free + Paid)"
          </p>
          <p className="text-sm text-gray-500 mb-2">Body Structure:</p>
          <div className="space-y-3 text-gray-700">
            <p><strong>Intro:</strong> "I've been in [industry] for X years..."</p>
            <p><strong>Free options:</strong> List 5-7 with brief descriptions</p>
            <p><strong>Paid options:</strong> List 3-5 with use cases</p>
            <p><strong>Your pick:</strong> "Personally, I use X because..."</p>
            <p><strong>Update:</strong> "Will keep this updated, drop suggestions below"</p>
          </div>
        </div>
        <div className="bg-green-50 border-l-4 border-green-600 p-4 rounded-r">
          <p className="text-sm font-semibold text-green-800">Why it works:</p>
          <p className="text-sm text-gray-700">Resource lists get bookmarked and shared. Great for SEO longevity.</p>
        </div>
      </div>

      <div className="border-2 border-orange-600 rounded-lg p-6 bg-orange-50">
        <h3 className="text-2xl font-bold text-orange-800 mb-4">
          Template #7: The AMA (Ask Me Anything)
        </h3>
        <div className="bg-white p-6 rounded-lg mb-4">
          <p className="text-sm text-gray-500 mb-2">Example Title:</p>
          <p className="font-semibold text-lg mb-4">
            "I've run a [business type] for 10 years. AMA about [topic]"
          </p>
          <p className="text-sm text-gray-500 mb-2">Body Structure:</p>
          <div className="space-y-3 text-gray-700">
            <p><strong>Credentials:</strong> Brief background establishing expertise</p>
            <p><strong>Proof:</strong> Optional - screenshot, verification</p>
            <p><strong>Invite:</strong> "Happy to answer any questions you have"</p>
            <p><strong>Response:</strong> Answer every question thoroughly and quickly</p>
          </div>
        </div>
        <div className="bg-green-50 border-l-4 border-green-600 p-4 rounded-r">
          <p className="text-sm font-semibold text-green-800">Why it works:</p>
          <p className="text-sm text-gray-700">Establishes you as the expert. Generates massive engagement and builds community trust.</p>
        </div>
      </div>
    </div>
  </div>
);

const RoadmapPage = () => (
  <div className="p-12 min-h-screen">
    <h2 className="text-4xl font-bold text-gray-800 mb-8 border-b-4 border-orange-600 pb-4">
      How to Rank on Google Using Reddit in 30 Days
    </h2>
    
    <div className="mb-6 bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
      <p className="text-gray-700">
        This is your step-by-step execution plan. Follow this timeline and you'll see results.
      </p>
    </div>

    <div className="space-y-6">
      <div className="border-l-4 border-orange-600 pl-6">
        <h3 className="text-2xl font-bold mb-3">Week 1: Foundation</h3>
        <div className="space-y-2 text-gray-700">
          <div className="flex items-start gap-3">
            <div className="bg-orange-600 text-white px-2 py-1 rounded text-xs font-semibold mt-1">Day 1</div>
            <div>
              <p className="font-semibold">Day 2: Join 10 subreddits</p>
              <p className="text-sm text-gray-600">Use the 5 community types from this guide</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="bg-orange-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
            <div>
              <p className="font-semibold">Days 3-5: Build karma</p>
              <p className="text-sm text-gray-600">Leave 20+ helpful comments, no promotion</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="bg-orange-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">4</div>
            <div>
              <p className="font-semibold">Day 6: Draft your first post</p>
              <p className="text-sm text-gray-600">Use Template #1 or #3, pure value</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="bg-orange-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">5</div>
            <div>
              <p className="font-semibold">Day 7: Post and engage</p>
              <p className="text-sm text-gray-600">Publish your post, respond to every comment</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="bg-green-50 border-2 border-green-600 rounded-lg p-6">
          <h4 className="font-bold text-lg mb-3 text-green-800">✅ What Success Looks Like</h4>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>• Your posts ranking on Google page 1</li>
            <li>• Steady stream of qualified leads</li>
            <li>• Established authority in your niche</li>
            <li>• Free organic traffic every day</li>
            <li>• Community trust and recognition</li>
          </ul>
        </div>
        
        <div className="bg-red-50 border-2 border-red-600 rounded-lg p-6">
          <h4 className="font-bold text-lg mb-3 text-red-800">⚠️ What Failure Looks Like</h4>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>• Getting banned for spam</li>
            <li>• Posts with zero engagement</li>
            <li>• Wasted time with no results</li>
            <li>• Damaged reputation in communities</li>
            <li>• Giving up too soon</li>
          </ul>
        </div>
      </div>

      <div className="bg-gradient-to-br from-orange-600 to-red-600 text-white p-8 rounded-lg">
        <h3 className="text-2xl font-bold mb-4">Final Thoughts</h3>
        <p className="text-lg mb-4">
          Reddit SEO isn't about gaming the system. It's about genuinely helping people in communities you care about, while naturally positioning yourself as an expert.
        </p>
        <p className="text-lg mb-4">
          The businesses winning on Reddit right now are those who understand this simple truth: <strong>give value first, and the business will follow.</strong>
        </p>
        <p className="text-lg">
          Your competitors are either ignoring Reddit entirely or approaching it the wrong way. That's your opportunity.
        </p>
      </div>

      <div className="border-2 border-gray-300 rounded-lg p-8 text-center">
        <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
        <p className="text-gray-700 mb-6">
          Follow the 30-day roadmap in this guide. Stay consistent. Be helpful. Watch your traffic grow.
        </p>
        <div className="bg-orange-50 border-l-4 border-orange-600 p-6 rounded-r-lg text-left">
          <p className="font-semibold mb-2">📌 Save This Resource:</p>
          <p className="text-sm text-gray-600">Bookmark this guide and refer back to the templates as you create your posts. The most successful businesses are those that execute consistently over 90 days.</p>
        </div>
      </div>

      <div className="text-center py-8 border-t-2 border-gray-200">
        <p className="text-gray-500 text-sm mb-2">© 2024 The Reddit SEO Playbook</p>
        <p className="text-gray-400 text-xs">This guide is based on real results and proven strategies. Your results may vary based on your industry, execution, and consistency.</p>
      </div>
    </div>
  </div>
);

export default RedditSEOPlaybook;old">Create & optimize your Reddit account</p>
              <p className="text-sm text-gray-600">Professional username, profile picture, bio</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="bg-orange-600 text-white px-2 py-1 rounded text-xs font-semibold mt-1">Day 2-3</div>
            <div>
              <p className="font-semibold">Research and join 10-15 target subreddits</p>
              <p className="text-sm text-gray-600">Read rules, observe top posts, understand the culture</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="bg-orange-600 text-white px-2 py-1 rounded text-xs font-semibold mt-1">Day 4-7</div>
            <div>
              <p className="font-semibold">Build karma through genuine engagement</p>
              <p className="text-sm text-gray-600">Leave 20-30 helpful comments, answer questions, participate authentically</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-l-4 border-orange-600 pl-6">
        <h3 className="text-2xl font-bold mb-3">Week 2: Establish Presence</h3>
        <div className="space-y-2 text-gray-700">
          <div className="flex items-start gap-3">
            <div className="bg-orange-600 text-white px-2 py-1 rounded text-xs font-semibold mt-1">Day 8-10</div>
            <div>
              <p className="font-semibold">Continue building karma (target 50-100 total)</p>
              <p className="text-sm text-gray-600">Focus on your target subreddits, become a recognized contributor</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="bg-orange-600 text-white px-2 py-1 rounded text-xs font-semibold mt-1">Day 11-14</div>
            <div>
              <p className="font-semibold">Create your first value-add post</p>
              <p className="text-sm text-gray-600">Use Template #1 or #3, keep it 100% helpful with zero self-promotion</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-l-4 border-orange-600 pl-6">
        <h3 className="text-2xl font-bold mb-3">Week 3: Start Ranking</h3>
        <div className="space-y-2 text-gray-700">
          <div className="flex items-start gap-3">
            <div className="bg-orange-600 text-white px-2 py-1 rounded text-xs font-semibold mt-1">Day 15-17</div>
            <div>
              <p className="font-semibold">Post strategic content in 2-3 subreddits</p>
              <p className="text-sm text-gray-600">Focus on topics people Google: "best [service] in [city]"</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="bg-orange-600 text-white px-2 py-1 rounded text-xs font-semibold mt-1">Day 18-21</div>
            <div>
              <p className="font-semibold">Engage with your posts and others</p>
              <p className="text-sm text-gray-600">Respond to every comment on your posts, continue helping in other threads</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-l-4 border-orange-600 pl-6">
        <h3 className="text-2xl font-bold mb-3">Week 4: Scale & Optimize</h3>
        <div className="space-y-2 text-gray-700">
          <div className="flex items-start gap-3">
            <div className="bg-orange-600 text-white px-2 py-1 rounded text-xs font-semibold mt-1">Day 22-25</div>
            <div>
              <p className="font-semibold">Create comparison and data posts</p>
              <p className="text-sm text-gray-600">Use Templates #2 and #4 targeting high-volume search terms</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="bg-orange-600 text-white px-2 py-1 rounded text-xs font-semibold mt-1">Day 26-28</div>
            <div>
              <p className="font-semibold">Check Google rankings</p>
              <p className="text-sm text-gray-600">Search "[your topic] reddit" and see where your posts appear</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="bg-orange-600 text-white px-2 py-1 rounded text-xs font-semibold mt-1">Day 29-30</div>
            <div>
              <p className="font-semibold">Double down on what works</p>
              <p className="text-sm text-gray-600">Analyze which posts got traction, create similar content</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-lg mt-8">
        <h3 className="font-bold text-xl mb-3 text-green-800">
          📊 Expected Results After 30 Days
        </h3>
        <ul className="space-y-2 text-gray-700">
          <li>• 3-5 posts ranking on Google's first page</li>
          <li>• 100-200 karma established credibility</li>
          <li>• Steady stream of organic traffic to your business</li>
          <li>• Authority established in your niche communities</li>
        </ul>
      </div>
    </div>
  </div>
);

const MistakesPage = () => (
  <div className="p-12 min-h-screen">
    <h2 className="text-4xl font-bold text-gray-800 mb-8 border-b-4 border-orange-600 pb-4">
      7 Critical Mistakes to Avoid
    </h2>
    
    <div className="space-y-6">
      <div className="bg-red-50 border-2 border-red-300 rounded-lg p-6">
        <h3 className="text-xl font-bold text-red-800 mb-3 flex items-center gap-2">
          <span className="text-2xl">❌</span> Mistake #1: Posting Too Soon
        </h3>
        <p className="text-gray-700 mb-2">
          <strong>What happens:</strong> Your account gets shadowbanned or posts get removed.
        </p>
        <p className="text-gray-700">
          <strong>The fix:</strong> Wait until you have 50+ karma and your account is at least 7 days old before posting promotional content.
        </p>
      </div>

      <div className="bg-red-50 border-2 border-red-300 rounded-lg p-6">
        <h3 className="text-xl font-bold text-red-800 mb-3 flex items-center gap-2">
          <span className="text-2xl">❌</span> Mistake #2: Being Obviously Promotional
        </h3>
        <p className="text-gray-700 mb-2">
          <strong>What happens:</strong> Community downvotes you into oblivion and you get banned.
        </p>
        <p className="text-gray-700">
          <strong>The fix:</strong> Lead with value. Your business should be mentioned naturally in context, never as the main point.
        </p>
      </div>

      <div className="bg-red-50 border-2 border-red-300 rounded-lg p-6">
        <h3 className="text-xl font-bold text-red-800 mb-3 flex items-center gap-2">
          <span className="text-2xl">❌</span> Mistake #3: Ignoring Subreddit Rules
        </h3>
        <p className="text-gray-700 mb-2">
          <strong>What happens:</strong> Instant post removal and possible ban.
        </p>
        <p className="text-gray-700">
          <strong>The fix:</strong> Read the rules of EVERY subreddit before posting. Some ban self-promotion entirely, others allow it on certain days.
        </p>
      </div>

      <div className="bg-red-50 border-2 border-red-300 rounded-lg p-6">
        <h3 className="text-xl font-bold text-red-800 mb-3 flex items-center gap-2">
          <span className="text-2xl">❌</span> Mistake #4: Using Your Business Name as Username
        </h3>
        <p className="text-gray-700 mb-2">
          <strong>What happens:</strong> Screams "corporate shill" and reduces trust.
        </p>
        <p className="text-gray-700">
          <strong>The fix:</strong> Use a personal-sounding username. You're a person who happens to work in this industry, not a business account.
        </p>
      </div>

      <div className="bg-red-50 border-2 border-red-300 rounded-lg p-6">
        <h3 className="text-xl font-bold text-red-800 mb-3 flex items-center gap-2">
          <span className="text-2xl">❌</span> Mistake #5: Posting the Same Content Everywhere
        </h3>
        <p className="text-gray-700 mb-2">
          <strong>What happens:</strong> Reddit's spam filters catch you and ban your account site-wide.
        </p>
        <p className="text-gray-700">
          <strong>The fix:</strong> Customize each post for each community. Different angle, different wording, different value proposition.
        </p>
      </div>

      <div className="bg-red-50 border-2 border-red-300 rounded-lg p-6">
        <h3 className="text-xl font-bold text-red-800 mb-3 flex items-center gap-2">
          <span className="text-2xl">❌</span> Mistake #6: Not Engaging After Posting
        </h3>
        <p className="text-gray-700 mb-2">
          <strong>What happens:</strong> Your post dies in "new" and never gets traction.
        </p>
        <p className="text-gray-700">
          <strong>The fix:</strong> Respond to EVERY comment within the first hour. Reddit's algorithm rewards engagement.
        </p>
      </div>

      <div className="bg-red-50 border-2 border-red-300 rounded-lg p-6">
        <h3 className="text-xl font-bold text-red-800 mb-3 flex items-center gap-2">
          <span className="text-2xl">❌</span> Mistake #7: Giving Up After One Post
        </h3>
        <p className="text-gray-700 mb-2">
          <strong>What happens:</strong> You miss out on the compounding benefits of consistent presence.
        </p>
        <p className="text-gray-700">
          <strong>The fix:</strong> Commit to posting valuable content 2-3 times per week for at least 90 days. Success builds over time.
        </p>
      </div>
    </div>
  </div>
);

const CaseStudiesPage = () => (
  <div className="p-12 min-h-screen">
    <h2 className="text-4xl font-bold text-gray-800 mb-8 border-b-4 border-orange-600 pb-4">
      Real Success Stories
    </h2>
    
    <div className="space-y-8">
      <div className="border-2 border-green-600 rounded-lg p-6 bg-green-50">
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-2xl font-bold text-green-800">Case Study #1: Local Service Business</h3>
          <div className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">$15k Revenue</div>
        </div>
        <div className="space-y-3 text-gray-700">
          <p><strong>Industry:</strong> HVAC Repair (Denver, CO)</p>
          <p><strong>Strategy:</strong> Posted in r/Denver answering HVAC questions during peak summer months</p>
          <p><strong>Key Post:</strong> "HVAC tech here - 5 things to check before calling for repair (could save you $200)"</p>
          <p><strong>Results:</strong></p>
          <ul className="ml-6 space-y-1">
            <li>• Post ranked #1 on Google for "HVAC repair Denver reddit"</li>
            <li>• 47 upvotes, 89 comments</li>
            <li>• 12 qualified leads in first month</li>
            <li>• $15,000 in revenue from Reddit traffic alone</li>
          </ul>
          <div className="bg-white p-4 rounded mt-4">
            <p className="font-semibold text-sm mb-2">💡 Key Takeaway:</p>
            <p className="text-sm">He didn't sell anything in the post. He gave away valuable troubleshooting tips, and people naturally asked for his services in the comments.</p>
          </div>
        </div>
      </div>

      <div className="border-2 border-blue-600 rounded-lg p-6 bg-blue-50">
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-2xl font-bold text-blue-800">Case Study #2: SaaS Product</h3>
          <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">487 Sign-ups</div>
        </div>
        <div className="space-y-3 text-gray-700">
          <p><strong>Industry:</strong> Project Management Tool for Freelancers</p>
          <p><strong>Strategy:</strong> Created comparison posts in r/freelance and r/entrepreneur</p>
          <p><strong>Key Post:</strong> "I tested 15 project management tools as a freelancer. Here's the honest breakdown."</p>
          <p><strong>Results:</strong></p>
          <ul className="ml-6 space-y-1">
            <li>• Ranked #2 for "best project management for freelancers reddit"</li>
            <li>• 234 upvotes across 3 related subreddits</li>
            <li>• 487 sign-ups in 60 days</li>
            <li>• 43 converted to paid customers ($2,580 MRR)</li>
          </ul>
          <div className="bg-white p-4 rounded mt-4">
            <p className="font-semibold text-sm mb-2">💡 Key Takeaway:</p>
            <p className="text-sm">She included her own tool as one of 15 options, not the only option. Honest comparison builds trust.</p>
          </div>
        </div>
      </div>

      <div className="border-2 border-purple-600 rounded-lg p-6 bg-purple-50">
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-2xl font-bold text-purple-800">Case Study #3: E-commerce Store</h3>
          <div className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">$8k Month 1</div>
        </div>
        <div className="space-y-3 text-gray-700">
          <p><strong>Industry:</strong> Sustainable Home Goods</p>
          <p><strong>Strategy:</strong> Posted detailed guides in r/ZeroWaste and r/Anticonsumption</p>
          <p><strong>Key Post:</strong> "I quit Amazon and found eco-friendly alternatives for 50 common household items"</p>
          <p><strong>Results:</strong></p>
          <ul className="ml-6 space-y-1">
            <li>• 1.2k upvotes, post went viral in community</li>
            <li>• Ranked for multiple "[product] alternative reddit" searches</li>
            <li>• 8,000+ website visitors in first month</li>
            <li>• $8,200 in sales from Reddit traffic</li>
          </ul>
          <div className="bg-white p-4 rounded mt-4">
            <p className="font-semibold text-sm mb-2">💡 Key Takeaway:</p>
            <p className="text-sm">The post was genuinely helpful, listing competitors too. Their store was mentioned as "full disclosure, this is my shop" at the end.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const ToolsPage = () => (
  <div className="p-12 min-h-screen">
    <h2 className="text-4xl font-bold text-gray-800 mb-8 border-b-4 border-orange-600 pb-4">
      Tools & Resources
    </h2>
    
    <div className="space-y-6">
      <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
        <h3 className="text-xl font-bold mb-4 text-blue-800">Reddit Research & Analytics</h3>
        <div className="space-y-3">
          <div className="bg-white p-4 rounded">
            <p className="font-semibold">Subreddit Stats</p>
            <p className="text-sm text-gray-600 mt-1">subredditstats.com - Find trending subreddits and track growth</p>
          </div>
          <div className="bg-white p-4 rounded">
            <p className="font-semibold">Later for Reddit</p>
            <p className="text-sm text-gray-600 mt-1">laterforreddit.com - Schedule posts for optimal timing (free)</p>
          </div>
          <div className="bg-white p-4 rounded">
            <p className="font-semibold">Reddit Keyword Research Tool</p>
            <p className="text-sm text-gray-600 mt-1">keyworddit.com - Find what people are searching for in specific subreddits</p>
          </div>
        </div>
      </div>

      <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-lg">
        <h3 className="text-xl font-bold mb-4 text-green-800">Rank Tracking</h3>
        <div className="space-y-3">
          <div className="bg-white p-4 rounded">
            <p className="font-semibold">Google Search Console</p>
            <p className="text-sm text-gray-600 mt-1">Free - Track which Reddit posts are ranking for what keywords</p>
          </div>
          <div className="bg-white p-4 rounded">
            <p className="font-semibold">Manual Check</p>
            <p className="text-sm text-gray-600 mt-1">Search "[your keyword] reddit" in incognito mode weekly</p>
          </div>
        </div>
      </div>

      <div className="bg-purple-50 border-l-4 border-purple-600 p-6 rounded-r-lg">
        <h3 className="text-xl font-bold mb-4 text-purple-800">Content Creation</h3>
        <div className="space-y-3">
          <div className="bg-white p-4 rounded">
            <p className="font-semibold">ChatGPT / Claude</p>
            <p className="text-sm text-gray-600 mt-1">Draft post frameworks, but always personalize and add real experience</p>
          </div>
          <div className="bg-white p-4 rounded">
            <p className="font-semibold">Grammarly</p>
            <p className="text-sm text-gray-600 mt-1">Free - Ensure your posts are clear and error-free</p>
          </div>
          <div className="bg-white p-4 rounded">
            <p className="font-semibold">Hemingway Editor</p>
            <p className="text-sm text-gray-600 mt-1">Free - Make your writing clear and readable</p>
          </div>
        </div>
      </div>

      <div className="bg-orange-50 border-l-4 border-orange-600 p-6 rounded-r-lg">
        <h3 className="text-xl font-bold mb-4 text-orange-800">Monitoring & Alerts</h3>
        <div className="space-y-3">
          <div className="bg-white p-4 rounded">
            <p className="font-semibold">Reddit Notifications</p>
            <p className="text-sm text-gray-600 mt-1">Turn on mobile notifications for comment replies</p>
          </div>
          <div className="bg-white p-4 rounded">
            <p className="font-semibold">F5Bot</p>
            <p className="text-sm text-gray-600 mt-1">f5bot.com - Get email alerts when keywords are mentioned on Reddit (free)</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const ConclusionPage = () => (
  <div className="p-12 min-h-screen">
    <h2 className="text-4xl font-bold text-gray-800 mb-8 border-b-4 border-orange-600 pb-4">
      Your Next Steps
    </h2>
    
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-orange-100 to-red-100 p-8 rounded-lg">
        <h3 className="text-2xl font-bold mb-4">The Opportunity Window Is Closing</h3>
        <p className="text-gray-700 text-lg mb-4">
          Right now, Reddit SEO is still relatively unknown. Most businesses aren't doing this. But that won't last forever.
        </p>
        <p className="text-gray-700 text-lg">
          The businesses that move NOW will establish authority and rankings that will be hard for latecomers to compete with.
        </p>
      </div>

      <div className="bg-white border-2 border-orange-600 rounded-lg p-8">
        <h3 className="text-2xl font-bold mb-6 text-center">Your 7-Day Quick Start</h3>
        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <div className="bg-orange-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
            <div>
              <p className="font-semibold">Today: Create your Reddit account</p>
              <p className="text-sm text-gray-600">Professional username, photo, bio</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="bg-orange-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
            <div>
              <p className="font-semib2">Example Title:</p>
          <p className="font-semibold text-lg mb-4">
            "I spent $10k on [service/product] last year. Here's what actually worked."
          </p>
          <p className="text-sm text-gray-500 mb-2">Body Structure:</p>
          <div className="space-y-3 text-gray-700">
            <p><strong>Intro:</strong> "Like many of you, I was struggling with [problem]..."</p>
            <p><strong>Journey:</strong> Share 3-4 things you tried (including competitors)</p>
            <p><strong>Solution:</strong> Explain what finally worked and why</p>
            <p><strong>Results:</strong> Specific metrics or outcomes</p>
            <p><strong>CTA:</strong> "Happy to answer questions in the comments"</p>
          </div>
        </div>
        <div className="bg-green-50 border-l-4 border-green-600 p-4 rounded-r">
          <p className="text-sm font-semibold text-green-800">Why it works:</p>
          <p className="text-sm text-gray-700">You're sharing genuine experience, not selling. People trust personal stories.</p>
        </div>
      </div>

      <div className="border-2 border-orange-600 rounded-lg p-6 bg-orange-50">
        <h3 className="text-2xl font-bold text-orange-800 mb-4">
          Template #2: The Comparison Post
        </h3>
        <div className="bg-white p-6 rounded-lg mb-4">
          <p className="text-sm text-gray-500 mb-2">Example Title:</p>
          <p className="font-semibold text-lg mb-4">
            "[Option A] vs [Option B] vs [Option C]: Which one is actually worth it?"
          </p>
          <p className="text-sm text-gray-500 mb-2">Body Structure:</p>
          <div className="space-y-3 text-gray-700">
            <p><strong>Setup:</strong> "I tested all three so you don't have to..."</p>
            <p><strong>Criteria:</strong> List what you evaluated (price, quality, support, etc.)</p>
            <p><strong>Breakdown:</strong> Fair assessment of each option</p>
            <p><strong>Verdict:</strong> "For most people, I'd recommend..."</p>
            <p><strong>Caveat:</strong> "But if you need X, go with Y instead"</p>
          </div>
        </div>
        <div className="bg-green-50 border-l-4 border-green-600 p-4 rounded-r">
          <p className="text-sm font-semibold text-green-800">Why it works:</p>
          <p className="text-sm text-gray-700">Comparison posts rank incredibly well and position you as an unbiased expert.</p>
        </div>
      </div>

      <div className="border-2 border-orange-600 rounded-lg p-6 bg-orange-50">
        <h3 className="text-2xl font-bold text-orange-800 mb-4">
          Template #3: The Mistake Post
        </h3>
        <div className="bg-white p-6 rounded-lg mb-4">
          <p className="text-sm text-gray-500 mb-2">Example Title:</p>
          <p className="font-semibold text-lg mb-4">
            "5 expensive mistakes I made with [topic] (so you don't have to)"
          </p>
          <p className="text-sm text-gray-500 mb-2">Body Structure:</p>
          <div className="space-y-3 text-gray-700">
            <p><strong>Hook:</strong> "This cost me $X and 6 months of frustration..."</p>
            <p><strong>Mistake 1-5:</strong> Each with what happened and lesson learned</p>
            <p><strong>What to do instead:</strong> Actionable alternative for each</p>
            <p><strong>Close:</strong> "Hope this saves someone else the headache"</p>
          </div>
        </div>
        <div className="bg-green-50 border-l-4 border-green-600 p-4 rounded-r">
          <p className="text-sm font-semibold text-green-800">Why it works:</p>
          <p className="text-sm text-gray-700">Vulnerability builds trust. People love learning from others' mistakes.</p>
        </div>
      </div>
    </div>
  </div>
);

const Templates2Page = () => (
  <div className="p-12 min-h-screen">
    <h2 className="text-4xl font-bold text-gray-800 mb-8 border-b-4 border-orange-600 pb-4">
      7 Post Templates That Drive Traffic (Part 2)
    </h2>
    
    <div className="space-y-8">
      <div className="border-2 border-orange-600 rounded-lg p-6 bg-orange-50">
        <h3 className="text-2xl font-bold text-orange-800 mb-4">
          Template #4: The Data Post
        </h3>
        <div className="bg-white p-6 rounded-lg mb-4">
          <p className="text-sm text-gray-500 mb-2">Example Title:</p>
          <p className="font-semibold text-lg mb-4">
            "I analyzed 100 [businesses/cases/examples]. Here's what the successful ones did differently."
          </p>
          <p className="text-sm text-gray-500 mb-
