# Flying Squirrel

Our project provides insights about Finnish national parks and helps nature lovers plan their future visits. The main goal is to bring visitors a pleasant and enjoyable experience while surrounding by wonderful Finnish nature.

A project submission to [Junction Hackathon 2019](https://2019.hackjunction.com/) and our [Track Challenge](https://2019.hackjunction.com/challenges/finding-ways-to-keep-finlands-national-parks-enjoyable-for-both-foreign-travels-and-locals)


## Demo
[Demo](https://whoami1201.github.io/junction19)

Scan this on your mobile:

![QR Code](qr-code.png)

Backend code to process data is found [here](https://github.com/longv/junction19-server)


## Description
- **Solution idea**: The application helps to distribute visitors more evenly among tracks by directing them to less used ones. It provides forecast information of peak and low hours by days so visitors can plan their trip ahead.
-  **Impacts on real world**:  By distributing visitors evenly, we help to reduce the pressure on the environment, better visitors experience, boost local business and also help park organisers be well-prepared.
- **Technologies**: React, Node, Firebase, GPS
- **Future plans**: The application can be extended and have more features like: dashboard to provide personalised info, suggest locations based on visitors' interest

## How

We were given a dataset of visitor counts during the last few years in the national parks of Finland. Based on that, we make a prediction of the busy level of the current time and try to suggest alternatives to congested gates in the parks, thus help distribute the visitors evenly.

We also had a gamification idea that will let you check-in the nearest gate based on your GPS location and then give you points according to the busy levels. This will help the system to collect real-time usage level of the parks. Futhermore, there will be a leaderboard for park visitors as an incentive and you can get some gifts for being the *Highest Ranking Visitor in January* :) 

## Limitations

Due to time constraint and a large amount of raw data, we didn't manage to link our backend with the processed prediction data.

