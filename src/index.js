import Post from './models/Post'
//import Post from '@models/Post'

import * as $ from 'jquery'
import './styles/main.css'
import image from '@/assets/image.png'

const post = new Post('Title')
console.log('Post to string', post.toString())

$('pre').html(post.toString())
