export default function Loading() {
  return (
    <div className="animate-pulse">
      <div className="relative min-h-screen bg-gray-700/40 flex items-center justify-center">
        <div className="container mx-auto px-4 py-20 text-center">
          <div className="mx-auto max-w-6xl md:px-4">
            <div className="mb-6 h-6 w-32 bg-gray-600/50 rounded-md mx-auto"></div>
            <div className="h-10 md:h-14 bg-gray-600/50 rounded-md w-4/5 mx-auto mb-6"></div>
            <div className="h-6 bg-gray-600/50 rounded-md w-3/5 mx-auto mb-8"></div>
            <div className="flex flex-col sm:flex-row justify-center gap-4 w-full px-6 sm:px-0">
              <div className="h-16 w-full sm:w-64 bg-gray-600/50 rounded-md"></div>
              <div className="h-16 w-full sm:w-64 bg-gray-600/50 rounded-md"></div>
            </div>
          </div>
        </div>
      </div>

      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className={`py-20 ${i % 2 === 0 ? "bg-[#192831]" : "bg-[#23313B]"}`}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto md:px-4">
              <div className="text-center mb-16">
                <div className="h-10 w-1/2 bg-gray-600/50 rounded-md mx-auto mb-4"></div>
                <div className="h-6 w-3/4 bg-gray-600/50 rounded-md mx-auto"></div>
              </div>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  {[...Array(4)].map((_, j) => (
                    <div key={j} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-gray-600/50 rounded-full flex-shrink-0 mt-1"></div>
                      <div className="h-5 w-full bg-gray-600/50 rounded-md"></div>
                    </div>
                  ))}
                </div>
                <div className="relative aspect-[4/3] bg-gray-600/50 rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
