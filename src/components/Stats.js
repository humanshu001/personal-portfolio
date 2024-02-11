import React from 'react'

export default function Stats() {
  return (  
    <>
        <div className="row skills m-3" style={{backgroundColor:'var(--color-1)',borderRadius:'5px'}}>
            <div className="col-12 text-center">
                <h1 className='my-4' style={{color:'var(--color-6)',fontWeight:'900',fontSize:'70px'}}>Github Stats</h1>
            </div>
            <div className="stats">
                <img style={{height:'250px'}} className='m-auto mb-3' src="https://github-readme-streak-stats.herokuapp.com/?user=humanshu001&background=282c34&currStreakLabel=e5c07b&currStreakNum=e5c07b&dates=61afef&fire=98c379&ring=98c379&hide_border=true&hide_total_contributions=true&hide_longest_streak=true&card_width=230" alt=''/>
                <img style={{height:'250px'}} className='m-auto mb-3' src="https://github-readme-stats.vercel.app/api/top-langs/?username=humanshu001&layout=compact&bg_color=282c34&text_color=e5c07b&icon_color=00fff&title_color=98c379&hide_border=true" alt=''/>
                <img style={{height:'250px'}} className='m-auto mb-3' src="https://github-readme-streak-stats.herokuapp.com?user=humanshu001&sideNums=e5c07b&background=282c34&hide_border=true&card_width=230&sideLabels=e5c07b&dates=61afef&hide_current_streak=true&hide_total_contributions=true" alt="GitHub Streak" />
                <img style={{height:'250px'}} className='m-auto mb-3' src="https://github-readme-stats.vercel.app/api?username=humanshu001&include_all_commits=true&show_icons=true&count_private=true&show_owner=true&bg_color=282c34&text_color=e5c07b&icon_color=00fff&title_color=98c379&hide_border=true" alt=''/>
                <img style={{height:'250px'}} className='m-auto mb-3' src="https://github-readme-streak-stats.herokuapp.com?user=humanshu001&sideNums=e5c07b&background=282c34&hide_border=true&card_width=230&sideLabels=e5c07b&dates=61afef&hide_current_streak=true&hide_longest_streak=true" alt="GitHub Streak" />
                {/* <img src="https://github-readme-stats.vercel.app/api/pin/?username=humanshu001&repo=Geeta-Law-College&bg_color=282c34&hide_border=true" alt="" /> */}
            </div>

        </div>
    </>
  )
}
