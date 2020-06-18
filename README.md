# generator-jhipster-skipserverweb
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]
> JHipster blueprint that allows for a Java web layer to be skiped during code generation.

# Introduction

This is a [JHipster](https://www.jhipster.tech/) blueprint, that is meant to be used in a JHipster application.

This blueprint is intended for applications/projects that would like to take benefit from JHippster generator capabilities in creating Java JPA model, DTO's, JPA Repositories and Service layer, but **do not need** Rest Controllers and other components specific for Web applications.

Examples of this kind of applications would be: Spring Shell CLI apps, or Java FX based Desktop applications.

In short, once installed, this bluprint will skip the generation of all server web components.

**What this blueprint does not do at the moment!**

Current version of the bluprint does not change any of the build files: gradle.build or pom.xml. 

You still need to manually remove web dependencies you do not need from those!

# Supported JHipster version
Current version of the JHipster generator this bluprint is adjusted for, is JHipster version **6.8.0**.

# Prerequisites

As this is a [JHipster](https://www.jhipster.tech/) blueprint, we expect you have JHipster and its related tools already installed:

- [Installing JHipster](https://www.jhipster.tech/installation/)

# Installation

## With NPM

To install this blueprint:

```bash
npm install -g generator-jhipster-skipserverweb
```
This will install the latest version of the blueprint.

To update this blueprint:

```bash
npm update -g generator-jhipster-skipserverweb
```

## With Yarn

To install this blueprint:

```bash
yarn global add generator-jhipster-skipserverweb
```

To update this blueprint:

```bash
yarn global upgrade generator-jhipster-skipserverweb
```

# Usage

To use this blueprint in your Jhipster project run the command bellow:

```bash
jhipster --blueprints skipserverweb
```

Once the application is created modify it to suite your needs.

The most important part that needs to be customized is security configuration. This sub-generator will skip generation of all web based SpringSecurity Configuration files and will just create the most basic SpringConfiguration file, with the following content:

```java
@Configuration
@EnableGlobalMethodSecurity(securedEnabled = true)
public class SpringSecurityConfig {

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

}
```

It is up to you to setup security configuration to match your needs. All standard Jhipter security related tables, liquibase datasets, entities, services and repositories are still created. 


# Further Development

Simply checkout blueprint git repoisitroy to local folder:
```bash
git checkout https://github.com/dmadunic/generator-jhipster-skipserverweb.git
```
and you are ready to go.

## Running local Blueprint version for development

During development of blueprint, please note the below steps. They are very important.

1. Link your blueprint globally 

Note: If you do not want to link the blueprint(step 3) to each project being created, use NPM instead of Yarn as yeoman doesn't seem to fetch globally linked Yarn modules. On the other hand, this means you have to use NPM in all the below steps as well.

```bash
cd generator-jhipster-skipserverweb
npm link
```

2. Link a development version of JHipster to your blueprint (optional: required only if you want to use a non-released JHipster version, like the master branch or your own custom fork)

You could also use Yarn for this if you prefer

```bash
cd generator-jhipster
npm link

cd generator-jhipster-skipserverweb
npm link generator-jhipster
```

3. Create a new folder for the app to be generated and link JHipster and your blueprint there

```bash
mkdir my-app && cd my-app

npm link generator-jhipster-skipserverweb
npm link generator-jhipster (Optional: Needed only if you are using a non-released JHipster version)

jhipster -d --blueprints skipserverweb

```

## Publish new npm package of the blueprint 

### Publish manually

To publish package to npmjs manually, execute one of these commands:

```
npm release:patch
npm release:minor
npm release:major
```

### Publish (automatically) on commit with the version tag

For publish to occur automaticly on every commit with the version tag, two configuration steps need to be taken.

1) Create npmjs Auth Token with **Read and publish** access level. (For more see: [https://www.npmjs.com/settings/dmadunic/tokens](https://www.npmjs.com/settings/dmadunic/tokens))

2) Configure GitLab CI/CD environment variable of name NPM_TOKEN
- Once you have created the token above, copy its value and create new GitLab Ci/CD variable with the name NPM_TOKEN and this value.

After this is done, in order to publish new package version simply run:

```
npm version patch | minor | major
```
followed by commit of your changes.
This will trigger GitLab CI/CD pipeline that will as the last step publish package to the npmjs.

# License

Apache-2.0 © [Domagoj Madunić]()


[npm-image]: https://img.shields.io/npm/v/generator-jhipster-skipserverweb.svg
[npm-url]: https://npmjs.org/package/generator-jhipster-skipserverweb
[travis-image]: https://travis-ci.org/dmadunic/generator-jhipster-skipserverweb.svg?branch=master
[travis-url]: https://travis-ci.org/dmadunic/generator-jhipster-skipserverweb
[daviddm-image]: https://david-dm.org/dmadunic/generator-jhipster-skipserverweb.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/dmadunic/generator-jhipster-skipserverweb
