from setuptools import setup, find_packages

with open("README.md", "r", encoding="utf-8") as fh:
    long_description = fh.read()

setup(
    name="django-poobutton",
    version="0.1.0",
    author="Nestor Wheelock",
    author_email="",
    description="A retro arcade-style interactive poo button Easter egg for Django sites",
    long_description=long_description,
    long_description_content_type="text/markdown",
    url="https://github.com/nestorwheelock/poobutton",
    packages=find_packages(),
    include_package_data=True,
    classifiers=[
        "Development Status :: 3 - Alpha",
        "Framework :: Django",
        "Framework :: Django :: 3.2",
        "Framework :: Django :: 4.0",
        "Framework :: Django :: 4.1",
        "Framework :: Django :: 4.2",
        "Intended Audience :: Developers",
        "License :: OSI Approved :: GNU General Public License v3 (GPLv3)",
        "Operating System :: OS Independent",
        "Programming Language :: Python :: 3",
        "Programming Language :: Python :: 3.8",
        "Programming Language :: Python :: 3.9",
        "Programming Language :: Python :: 3.10",
        "Programming Language :: Python :: 3.11",
        "Programming Language :: Python :: 3.12",
        "Topic :: Games/Entertainment",
    ],
    python_requires=">=3.8",
    install_requires=[
        "Django>=3.2",
    ],
    package_data={
        'poobutton': [
            'templates/poobutton/*.html',
            'static/poobutton/css/*.css',
            'static/poobutton/js/*.js',
            'static/poobutton/audio/.gitkeep',
            'static/poobutton/video/.gitkeep',
        ],
    },
)
