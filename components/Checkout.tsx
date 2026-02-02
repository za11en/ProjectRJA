import React from 'react';
import { Lock, CreditCard, ShieldCheck, ArrowLeft, Shield } from 'lucide-react';

interface CheckoutProps {
  onBack: () => void;
}

const Checkout: React.FC<CheckoutProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-obsidian text-slate-200 p-4 md:p-12 flex items-center justify-center">
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 bg-slate-950 border border-slate-800 shadow-2xl overflow-hidden">
        
        {/* Left: Summary */}
        <div className="p-8 bg-slate-900 border-r border-slate-800">
          <button onClick={onBack} className="flex items-center gap-2 text-xs font-mono text-slate-500 hover:text-white mb-10 transition-colors">
            <ArrowLeft className="w-4 h-4" /> ABORT_TRANSACTION
          </button>
          
          <div className="mb-8">
            <h2 className="text-xs font-mono text-cyber-blue tracking-widest uppercase mb-2">Selected Tier</h2>
            <h3 className="text-3xl font-mono font-bold text-white uppercase">Watchman Class</h3>
          </div>

          <ul className="space-y-4 mb-10">
            {[
              "Real-Time Strike Alerts",
              "High-Res Map HUD",
              "Full War Room Access",
              "Priority Data Feed"
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-sm text-slate-400">
                <ShieldCheck className="w-4 h-4 text-cyber-blue" /> {item}
              </li>
            ))}
          </ul>

          <div className="border-t border-slate-800 pt-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-mono text-slate-500 uppercase">Monthly Allocation</span>
              <span className="text-xl font-mono text-white">$12.00</span>
            </div>
            <div className="flex justify-between items-center text-xs text-slate-600">
               <span>TRANS_FEE</span>
               <span>$0.00</span>
            </div>
          </div>
        </div>

        {/* Right: Payment */}
        <div className="p-8">
          <div className="mb-8 flex justify-between items-center">
            <h2 className="text-xs font-mono text-slate-500 tracking-widest uppercase">Secure Transaction Layer</h2>
            <Lock className="w-4 h-4 text-green-500" />
          </div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <label className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Card Identification</label>
              <div className="relative">
                <CreditCard className="absolute left-3 top-3 w-5 h-5 text-slate-600" />
                <input 
                  type="text" 
                  placeholder="0000 0000 0000 0000"
                  className="w-full bg-slate-900 border border-slate-800 p-3 pl-12 text-sm font-mono focus:border-cyber-blue outline-none transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Expiration</label>
                <input 
                  type="text" 
                  placeholder="MM / YY"
                  className="w-full bg-slate-900 border border-slate-800 p-3 text-sm font-mono focus:border-cyber-blue outline-none transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Sec_Code</label>
                <input 
                  type="text" 
                  placeholder="CVV"
                  className="w-full bg-slate-900 border border-slate-800 p-3 text-sm font-mono focus:border-cyber-blue outline-none transition-colors"
                />
              </div>
            </div>

            <div className="pt-6">
              <button className="w-full bg-cyber-blue hover:bg-cyan-400 text-obsidian py-4 font-mono font-bold uppercase tracking-widest transition-all shadow-[0_0_20px_rgba(14,165,233,0.3)]">
                AUTHORIZE_PURCHASE
              </button>
            </div>
          </form>

          <div className="mt-12 text-center">
            <p className="text-[10px] font-mono text-slate-700 leading-relaxed uppercase">
              Encrypted via Prophetic Security Protocol Alpha-7. <br/>
              No data is stored on external servers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
