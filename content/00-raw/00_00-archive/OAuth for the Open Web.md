---
unlisted: false
title: OAuth for the Open Web
tags:
source: https://aaronparecki.com/2018/07/07/7/oauth-for-the-open-web
published: 2018-07-07
publish: true
modified: 2026-07-18
id: 01KQQV6TV6SJY46MHTSEEDYJNP
description:
created: 2025-11-02
author:
  - "[[Creating an Authorization Endpoint]]"
aliases:
  - 01KQQV6TV6SJY46MHTSEEDYJNP
---

> [!danger] NOT MINE
> This is just a reference/bookmarked article from the internet i found interesting!

---

# OAuth for the Open Web

- July 7, 2018
	![](https://aaronparecki.com/2018/07/07/7/image-1.jpg)
	OAuth has become the de facto standard for authorization and authentication on the web. Nearly every company with an API used by third party developers has implemented OAuth to enable people to build apps on top of it.
	While OAuth is a great framework for this, the way it has ended up being used is much more centralized and closed than prior efforts like OpenID 1. Every service that spins up an OAuth-enabled API ends up being its own isolated system. For example, if I want to build an app that can read someone's step count from FitBit, I have to first go register as a developer on FitBit's website in order to get API keys to use with their OAuth API.
	This works okay for major services like Google, Twitter, Facebook, and even FitBit, but breaks down when you start to consider use cases like having someone's personal WordPress blog be its own OAuth server. If I want to build an app that lets you upload photos to your WordPress site, I'm obviously not going to be able to register for API keys on everyone's own WordPress installations. Enabling third party clients to be built against systems like WordPress or Mastodon opens up a huge possibility for some really interesting things. The trick is always how do these apps authenticate the user or obtain a token they can use to access those APIs.
	This post details a few specific challenges with OAuth preventing it from being used by independent websites, as well as the solutions to each.

## Client Registration

	The first major hurdle to overcome is the need for the developer to register to get API keys for the service. In a world where everyone's own website is its own OAuth server, it's obviously not practical to have an app developer register API keys at each.
	In OAuth, client registration gives us a few specific things:
	- Provides a unique ID that is used to identify the app throughout the OAuth process, called the client ID
	- Provides a place to enter the name and icon for the app which is displayed during login
	- Registers one or more redirect URLs for security
	- For "confidential clients" (web server apps), registration also provides the client with a client secret
	Note that in traditional OAuth, client secrets are not used by mobile apps or JavaScript apps, and OAuth servers will often not even issue secrets to those types of apps. Since we're trying to avoid registration entirely, we can also just avoid using client secrets at all, and leverage the same protections OAuth already has in place for clients that can't use a secret.
	![](https://aaronparecki.com/2018/07/07/7/image-2.png)
	In order to avoid registration, we need a solution for the first three bullet points above.
	**Client ID**: Every application needs a unique identifier. If we're talking about turning every website into an OAuth provider, we need a way to have globally unique identifiers for every OAuth app. It turns out we already have a mechanism for this: URLs! In this Open Web version of OAuth, client IDs can be the application's URL. For web-based apps, this is straightforward, as it's simply the website the app is running on. For native apps, this can be the application's "about" page.
	**Application name and icon**: Since the application's client ID is a URL, we can assume every application has a web page that talks about it, and treat that web page as the place the client defines its own metadata like name and icon. A simple way to accomplish this is with Microformats, so that the application's web page just needs to add a couple classes around the name and icon of the app. This is currently documented and implemented as the [h-app](https://indieweb.org/h-app) microformat.
	**Redirect URL registration**: This one is a bit more subtle. The purpose of redirect URL registration is to prevent an attacker from tricking an authorization server into sending authorization codes to the attacker. This becomes especially important when we aren't using client secrets. The trick is that since client IDs are already URLs, we can shortcut the normal registration process by declaring a rule that redirect URLs have to be on the same domain as the client ID. This way, we can avoid a situation where an application claiming to be good.example.com sets a redirect URL to attacker.example.org and steals the authorization code. The only way to get the authorization code to attacker.example.org would be to set the client ID to that domain as well, which a user would hopefully notice.

## User Accounts

	There are two different situations to consider with regards to user accounts: *authentication* and *authorization*. Authentication is the process of proving the identity of the person signing in. Authorization is how an application obtains permission to do something to someone's account.
	When we talk about *authentication*, we are talking about wanting to allow an unknown user to identify themselves to the site they're logging in to. Common examples of this are using your email address as your identity to sign in to a website. You bring an existing identity (your email address) and then authenticate (usually by clicking a link that was sent to your email). The original version of OpenID was created to solve this problem on the web. People identified themselves with a URL, which they were able to prove they controlled using OpenID. This allows a new user to log in to a site without needing a prior relationship with the site.
	When we talk about *authorization*, the situation is subtly different. In this case, we're talking about a user of a website wanting to give permission to a third-party app to access some part of their account. We're very used to this pattern now, which is the typical OAuth use case of granting an application the ability to access your Google Calendar, or logging in to a third party Twitter app.
	**Authorization**: There isn't really a challenge unique OAuth on the Open Web with regards to authorization. Once the client registration problem is solved, everything else falls into place nicely. It is assumed that users are authorizing an application to access an account they already have, so the application will just end up with an access token that works with their existing account.
	**Authentication**: Where we need to define some new behavior is talking about authentication. In this case, we want users to be able to bring an existing identity and use it to log in to other places. This means we need a way to uniquely identify users across the entire web. We can again use URLs as the solution! Every user is identified by a URL. This can be a short URL like someone's domain name, e.g. **https://aaronparecki.com/**, or for a site with multiple users, can be a URL that contains a path specifying a particular user on the site, e.g. **https://github.com/aaronpk**.

## Discovery

	With traditional OAuth services, discovery is not needed since the application author knows which OAuth server they're talking to before they start building the app. There is typically a "Sign in with \_\_\_\_" button in the application that begins the authorization process. In the case of using OAuth for authentication, the common pattern is to include buttons for several common "social login" providers such as Facebook, Google, Twitter and LinkedIn. Before the "social login" space essentially consolidated to these four, there were sometimes a dozen of these buttons on an application's login page, which eventually became known as the "NASCAR problem".
	![](https://aaronparecki.com/2018/07/07/7/image-3.png)
	In a world where every WordPress or Gitlab site is its own OAuth provider, there obviously can't be a button for each on a login screen. Instead, we need to find out from the user which server to use to authenticate them.
	Since we previously stated that every user identifier is a URL, we can ask the user to enter their URL in the sign-in screen, and then fetch that URL and discover their authorization server from there.
	![](https://aaronparecki.com/2018/07/07/7/image-4.png)
	Once we've found the user's authorization endpoint, we can start a normal OAuth request and send them to their server to authenticate. When the server redirects back to the application, it will go and verify the authorization code with their authorization endpoint just like normally happens with OAuth.

## Knowing Who Logged In

	While knowing any user identity information is technically not part of OAuth, we do need the server to return a user identifier when using OAuth for authentication. In practice, most applications also want at least a unique user identifier in the authorization case as well.
	We've previously said that user identifiers are URLs, which solves the global user identity problem, and gives us a mechanism to discover the user's OAuth server. So all we need is a way to return this information to the application after the user has authenticated.
	OAuth gives us an easy opportunity to return this to the application: in the access token response when the application sends the authorization code to obtain an access token. The server can at that point return the full user identifier of the user that logged in. As long as the domain name matches the domain that the user entered at the start, the application can consider it successful. This also gives the authorization server the opportunity to canonicalize the user identifier, correcting "http" to "https", or adding a path component to the user's profile URL.

## Let's do this

	By now, hopefully you're thinking "this sounds great, Aaron, someone should write this up as a OAuth extension!" I'm glad you asked!
	![](https://aaronparecki.com/2018/07/07/7/image-5.png)
	The IndieAuth spec, an OAuth 2.0 extension
	Earlier this year, I wrote this all up as an extension to OAuth 2.0, called IndieAuth. IndieAuth encapsulates these small additions needed for OAuth 2.0 to work in the Open Web.
	Despite this spec being published in January, it has actually been implemented for several years before that. There are [many implementations](https://indieweb.org/IndieAuth#Implementations) of this extension on the server side, everything from standalone authorization server projects, to a [WordPress](https://indieweb.org/Wordpress_IndieAuth_Plugin)  plugin, and it's even implemented by a commercial service, [Micro.blog](http://www.manton.org/2018/07/indieauth-for-micro-blog.html). As far as consuming apps, nearly every [Micropub app](https://indieweb.org/Micropub/Clients) has implemented this for logging users in.
	For further details on implementing this extension, there are several guides available depending on whether you're writing a client, a server, or just part of a server.
	- [Authenticating users with IndieAuth](https://indieweb.org/indieauth-for-login)
	- [Obtaining an access token with IndieAuth](https://indieweb.org/obtaining-an-access-token)
	- [Creating a Token Endpoint](https://indieweb.org/token-endpoint)
	There are a few existing open source projects you can use to get started if you don't want to write your own!
	- [selfauth](https://github.com/inklings-io/selfauth) - a standalone authorization server using a simple password login
	- [IndieAuth for WordPress](https://wordpress.org/plugins/indieauth/) - a plugin that turns your WordPress install into an OAuth 2.0 server
	- [IndieAuth for Drupal](https://www.drupal.org/project/indieweb) - a Drupal plugin that provides a built-in OAuth 2.0 server
	- [Acquiescence](https://github.com/barryf/acquiescence) - an authorization endpoint written in Ruby that authenticates users via GitHub
	For further reading, check out the [IndieAuth spec](https://indieauth.spec.indieweb.org/). Feel free to drop in to the [IndieWeb chat](https://indieweb.org/discuss) if you'd like to talk about this, or you can reach me on [Twitter](https://twitter.com/aaronpk)  or from [my website](https://aaronparecki.com/).
