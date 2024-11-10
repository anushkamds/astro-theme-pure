---
title: How to recover form corrupted gnome-shell-theme.gresource
tags:
  - linux
  - terminal
description: 'Somtime it is good, sometime it is bad'
publishDate: 2023-10-06
coverImage: { src: './image/glitch.webp', color: '#8D974D' }
---

Some day when you start up your OS, you feel like something is missing. I need that color in there, this color in there and transparency in that menu. Especially when you are using Linux distros, you know you can change it. You can do one or two crazy things but when something went wrong.

## Shit happens

I was using [Pop OS](https://pop.system76.com/) which was amazing ubuntu based distro for developers especially. Amazing ubuntu-based OS to use and very convenient one. I got a crazy idea yesterday

> I want a transparent top bar

Got a post and tell you can edit the CSS file in `/usr/share/gnome-shell/theme/<theme name>` location but there, I got a resource file called `gnome-shell-theme.gresource`, opened it and it had CSS attribute that I wanted. I opened it with vi and there were some arbitrary letters which I didn't care about.

<figure>

![arbitrary letters in command line](/images/opened-resource-file.webp)

</figure>

I did my change and restarted the shell. My screen got haywire. Restarted the laptop then goes to the command line and come back to a grey screen. It's time, to get started with panic.

## Recover mission

1. First, you need to create Pop OS USB bootable drive. For that, you can use [Rufus](https://rufus.ie/en_US/), I have used it. There are several alternatives you can utilize.

2. Then you need to boot your machine using that pen drive to install the mode of Pop OS. After you got the install window, close it and open up the terminal `([Win] + T)`.

3. Then try the below command,
   > `lsblk`

and You will be displayed with a list of drivers used in.

4. You have to mount your Pop OS which will have to use the below commands based on your hard drive type,
   > SATA Drives: `sudo mount /dev/sda3 /mnt`
   >
   > NVMe Drives: `sudo mount /dev/nvme0n1p3 /mnt`

**but** this location will change if you have a dual boot option. Refer to the [Use The Recovery Partition](https://support.system76.com/articles/pop-recovery/) documentation for more detail if you faced any issue in mounting the drive.

5.  Now what you do is, copy the resource file in a USB drive to your drive. You will find the resource inside `/usr/share/gnome-shell/theme/` location.
    `sudo cp /usr/share/gnome-shell/theme/<theme name>/<gresource file name> /mnt/usr/share/gnome-shell/theme/`

`mnt` is used to navigate to the mounted drive which is your originally OS installed driver. WHOA, everything back to normal.

## The correct way

I should have to change the `gnome-shell.css` file with whatever I wanted and restart the shell because the resource file has been created with reference to the shell CSS file and it contains some things I don't understand. Also for my thing, there are gnome extensions, you can use them easily. If those don't help you then go manually but be vigilant before you touch anything.

## Resources

- [Top panel transparency question](https://pop-planet.info/forums/threads/top-panel-transparency-question.79/#post-3376)
- [GNOME Shell Extensions](https://extensions.gnome.org/)
