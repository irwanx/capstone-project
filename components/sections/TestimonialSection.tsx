"use client";

import { siteConfig } from "@/constants/config";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Image from "next/image";

const ChatIllustration = () => (
  <Image
    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA1klEQVR4nO3Yu0rEUBCA4UHfaktRWbXTVWy0VPGhtXEbwUIWL+Dlk1OJSxYExTiH+Z4gP0kmcxJRSimllFLKX8EMt7jHSWSEY7z61GLWIxMc4sVXd1iLLHAwENHuzFFkgV08L0W84TSywM5AxDvOIgtM8TQQcR5ZYHtFxEVkga0VEZeRBTbxmD1iAw/Gc92Gy08jJlgY302F/KNH66qN/PgNXbzsXY3frj6IXa0oXS2NXa3x3zhYzSIbw0fdeXTy82EeWWG/BbR1AntjX08ppZRSSimx7AOxXwwKgUodxAAAAABJRU5ErkJggg=="
    alt="chat illustration"
    width={40}
    height={40}
    className="rounded-full"
  />
);

const MenuIcon = () => (
  <Image
    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAWElEQVR4nO3TMQ6AIBBE0a24unhPF47xjdHKkKyJS8W8koKfQMbsA6AAO9AAB+p1Zlm4L3yrmYE2CPTMgA8Cx+wn2jID5Yn4lE+WEBpaBA1NfkNDi7D00E6AOpUl4DkexAAAAABJRU5ErkJggg=="
    alt="menu icon"
    width={24}
    height={24}
    className="rounded-full"
  />
);

const WtfIcon = () => (
  <Image
    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAExElEQVR4nO2aW4iVVRTH96jZ0bK8ZJIQXfQhUazorV4iKhVr7AbhhQjKHAt0sIfoRaMgaswXYR7C6CEoiKBAUYvSEpTmZmVXbUaMyu6aRpjTSL9Ynf+Hm9N3OXufb5oz0B+GmTl7rbXX2pe1/3vt45wATAAeAd4FfgX+AD7SZ2PdaAAwFxggG28AY1wzA7gI+F4O7wJuAWYClwLPe8E8WGBnCtAKPAnsAD4DvtPMDgLHgS+A7cBGYInplBnIJjm6O23UgbfU3pXSdi6wDNgqZ0NxRvZXmC3XYCBHZPTejPa71X6qJoCHga89p4Y0GE8DdwFzgEuACnCOZsw+uwNYr7142tM/Cqwz+dhAkpG8sSCQH73PLAkk+BBYDUyP6HsysBLo8+wNAItiAvlBBtoy2l9V+ybvM9sD3RrdluBO0/tZqEFJ0Bk0O8ADwAJLvylt12odnwRmlOFwgS9jgbW2jBVMbyn9Am/L4OOleFp/v/OBQ+q7H7iiEWPXe5twYqme1tf/NMuUXjBxMwN0yMizpXtZvw/necH0RmU04DUZWJ0jMxF4TAfdkKjNXuChsmgN1ZlJlllnjIEtUn4mh9YkZ1AadpURiLdnkgSw0IVA2exNYHFK21WiHCgN3wycD0wS9bAR7AvqsNifdm+/VMoy+omMvg6Mz5Ap5XxJAIzzDuJ2FwLLFMD9tYrAOyKYpWczcgbATnwF8m0QNwNeluLx4b6TAFdqxLtzZFqA/fJpWZ6xl4DDlvb0/31S+hOYl6EzBnhRMi/k3VuAHuBLXdZma0/NAh5VxjPsKQh41T9SsDNLYILYqFGSSV7quwe4MMewsWAfbTmye8jHK5Y0CgKZIqI7lOoXcJOM9eYZyhhlH90FXKpVM28z6GN/QJ/vSac1rdFudoaNgYGcqHHoRJ16v9foHQvo8wnpdLicm+CSwECMGfs4OZx6BuBO6WxztfBowHUuANrgf0nXfm8ZTj2PVRgOupwlcplrclAtmBh+Tmu0LMBIUPZQUK0ZGE7n3d1TKcdoCuSYGqe6JgcwXb7+lNZoJ65hjmtyULDZt8ek35EA1bqZYWta43NqXO+aHBQciFajMux2TQ7OcrbbssjYGRHHya5JAUz1SOMFWUIJTVlZUqdG8W8AnlKh29jDL3Jkb6TNNvm4I09ouYT6SriWGr3/imz8FmG3BfhA+kvzBCsqyBkWRAYxM4Xap6ErwvZi6X5TeNVVaR9FHny9VSGtHqyJmOUDdetqVpJnuLURgbxfRxAfh5Z0ODvAh+ouPHjVCiuKzY+gD/tygvg0lGED1+gJz3CrC1Tu9EZgWkS2Wq53lKO6RPWoyFCJGJh++bI5KAhviSXrvSuprPyXoFq9tEom+h33zqjROChDPTHPaw0efPvU90DDDz72yOJNrS2zq0vzNn9P9KtPY+WXl2V4hrfMTqmgPK4U4/9Oseu8jW3L6eKyO6l4CQCVNxeVZLtFh90Bz/7mht/e63h9TaYd1WJXxXyLQfugzaMdyVIKS7ENzk67quIJBkWvN6juNFcl1/H6sb/n6VK0QbL+tyWMdqwZ1lnICSj5CsdOXQFCMaSb6dIRCSANVlAGbtcj6ja9KyaUfVB/fy463yHZ9PvE/3CjH38DhCSZBgFMW9kAAAAASUVORK5CYII="
    alt="wtf icon"
    width={32}
    height={32}
    className="rounded-full"
  />
);

const AttachIcon = () => (
  <Image
    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACtElEQVR4nO2ZT4hNURjAz0TNmIdkYSiLaUyJkihboSglC7JgI2PmGZSIYYw/K//CnoWyU9bGTJSUhcQGiWwQiiwk5P+bn77mu3xm7r3v3efdd++r86tX0zn3nPP95px3v3POc87j8Xg8VQK0AceB+8Bn/cjfJ4CZrhEANgCfiEakNrk8A2wHRjTgYWAFUNDPMuCK1o1kLgNMA2aFlPcaiSMx7Q+bmRnXT10AOoGXwAegOULiQAX9DOqzJ1MPOkLilQZwDWjS8m1JJARdcsJDV0+AduC5Dn4LmKzl3UBJyw8l6G+KtvmSauAxM3EDaA2Zif0J+5wafE9SC7xCiWK1EgKwSts+cDmR6Kui3ybgurY/lkrwaUsI8mrW9h+BGS4DiR4jsa/KvvtNQlxf8+BrKQHMB84DHTESvVlI2FdsOYkFwDt9tjsLiag80WUkDpbpYx7wRp8dCjK/yBuJnV4iDi8RLdESIrHDZSzRn0BCzh5eopYSWxpJojMiT9iZ2JMgTwyaL7bNM8UsJNYYid0JJK5mITEnQqIZeK3lAzWQ6En7ouDpWAmtW6nlj4AJFUoMhUiUUpUQgEs62F0rYTaCwgVbnkeJhTqQXLvMDqlfp8HcrFCiJUTiz8YwTZEzOuDpiPrpcvjXZ/45GwCLjcRwZhKC3rUKS1z5y7KSLsO9stSAH7mQEID3OnDBxZ+fTwG/GM/FzCUE4Ku+Fie6MgBzNdhzeqZeZOqsxFZXb/i7FWn/jz6ylRCAyxpEsWElBGCjBvI4LuHlWkKQ4IEnSS/Cxuxi07soSAKwHPipQR0NbtBjxM+amehyeYLRrUjwer0DrAUmmfqC/lwW5B3JIZtdHgFWA29NjvgGPANeAN9NufyIs9TlGUb/833APXNrGCyj28CuIAE2DECrHrY67DLzeDwu9/wGThCiV6GWixYAAAAASUVORK5CYII="
    alt="attach icon"
    width={32}
    height={32}
    className="rounded-full"
  />
);

const SentIcon = () => (
  <Image
    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACG0lEQVR4nO2YzWoUQRRG72QTwfysAuIuUcjMJHkDN6IhkCcQBHcqIvgMLkMQEhnzEi4EE8Tn0CSLJKgrNQkaRdCNmiMXKkzTTndXdXX3VIc+u/lh+h6+W7eqRqShoeFcAEwCt4EJqSPALLABvAMWzHv1kAFGgJvAFnAKHEckOsAtCRlgHLgH7NInKtEGDrTNJESAq8AKcBIRGCTxGehJSAAt0z7PgT8xgSQJbbO2hAAwZtpnh2SOB0gor4ddvxZ0JaF9bCWU5WEKXEtpnzhHKRK6yEeG1T7bFsVHJeYTJJRHVQrMmPb56iAwSOJT7PMflYxcx/ZxlVCelln8BeAO8Jb82Eic6jGlDIHLwGPgi4eArYTyqqz2+Y0/thLKUhHFj5r2eUNxuEjse43cAtsnTWI2Q0J56CPRyzl9sjgEuuYZXfM6je96GvYReR+AhLKeW8I86JL+CPCLYtCiO44Sf/Vo7yUSEZoyu/RPzzUx57AmztgsRKIgobwSymLhIjmFfCT29NJVmoiDUFziI248KF3CQujQU+KbXgEqFRkg9MFTQnkyFImYUCvlUoTlyJ2RgP5Yy7uhvpSQANZyityQkDAnA9c9Z7eSkVtBKvclRHBLRUfuRQkV7FNZlZDBLhW990xL6JCdygupA2Sncl3qAsmp7AQ5cnOkclfqBv+nchL0yHVIZUXqCv1U6jFyM1LRk/GzxC81NDRIWfwDVZ8EFewep2sAAAAASUVORK5CYII="
    alt="sent icon"
    width={32}
    height={32}
    className="rounded-full"
  />
);

export default function TestimonialSection() {
  const { title, description, list } = siteConfig.testimonials;

  const nameColors = [
    "#4EEB8A",
    "#5AC8FA",
    "#89BFFF",
    "#4DD3C9",
    "#FF957A",
    "#D59EFF",
    "#FFA4C5",
    "#FFD166",
    "#FF8585",
  ];

  return (
    <section
      id="testimoni"
      className="py-20 bg-[#F0F2F5] dark:bg-[#192831] text-[#111] dark:text-white relative z-10 transition-colors duration-300"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto md:px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
              {title}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {description}
            </p>
          </div>

          <div className="w-full max-w-6xl mx-auto bg-[#1E2A33] rounded-xl">
            <div className="bg-[#2A3942] flex justify-between items-center rounded-tr-xl rounded-tl-xl px-4 py-2 md:px-6 md:py-4">
              <div className="flex justify-start items-center gap-x-2 md:gap-x-4">
                <ChatIllustration />
                <Image
                  src={siteConfig.logo}
                  alt={`${siteConfig.name} Logo chat`}
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <h3 className="uppercase font-semibold">{siteConfig.name}</h3>
              </div>
              <MenuIcon />
            </div>

            <div className="shadow-inner space-y-4 transition-colors duration-300 p-2 md:p-6">
              {list.map((testimonial, i) => {
                const isLeft = i % 2 === 0;
                const nameColor = nameColors[i % nameColors.length];

                return (
                  <article
                    key={i}
                    className={`flex items-end ${isLeft ? "justify-start" : "justify-end"}`}
                    role="article"
                  >
                    {isLeft && (
                      <Avatar className="w-10 h-10 mr-3">
                        {/* <AvatarImage src={testimonial.avatar} alt={`Avatar of ${testimonial.name}`} /> */}
                        <AvatarFallback>
                          {testimonial.name.slice(0, 2).toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                    )}

                    <div
                      className={`rounded-xl px-4 py-3 max-w-[75%] leading-relaxed text-sm transition-colors duration-300 ${
                        isLeft
                          ? "bg-[#EDEDED] dark:bg-[#2A3942] text-black dark:text-white rounded-bl-none"
                          : "bg-[#DCF8C6] dark:bg-[#005C4B] text-black dark:text-white rounded-br-none"
                      }`}
                    >
                      <p
                        className="mb-1 font-semibold"
                        style={{ color: nameColor }}
                      >
                        {testimonial.name} - {testimonial.role} (
                        {testimonial.location})
                      </p>
                      <blockquote className="italic">
                        <p>{testimonial.text}</p>
                      </blockquote>
                    </div>

                    {!isLeft && (
                      <Avatar className="w-10 h-10 ml-3">
                        {/* <AvatarImage src={testimonial.avatar} alt={`Avatar of ${testimonial.name}`} /> */}
                        <AvatarFallback>
                          {testimonial.name.slice(0, 2).toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                    )}
                  </article>
                );
              })}
            </div>

            <div className="bg-[#2A3942] flex justify-between items-center rounded-br-xl rounded-bl-xl px-4 py-2 md:px-6 md:py-4">
              <div className="flex justify-start items-center gap-x-2 md:gap-x-4 w-full">
                <WtfIcon />
                <AttachIcon />
                <h3 className="uppercase ml-4">{siteConfig.name}</h3>
              </div>
              <div className="bg-[#005C4B] text-white p-2 rounded-full">
                <SentIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
